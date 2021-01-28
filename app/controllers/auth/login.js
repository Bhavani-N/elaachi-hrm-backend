const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Staff = require('./../../database/models/staff/index');
const catchAsync = require('./../../utils/catchAsync');
const AppError = require('./../../utils/appError');
const { PasswordServ, TokenServ } = require('../../utils/auth');
const { staffService } = require('../../services')

const signToken = id => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

const createSendToken = (staff, statusCode, res) => {
  const token = signToken(staff._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);
  staff.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: { 
        staff
    }
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newStaff = await Staff.create(req.body);
  createSendToken(newStaff, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const currentTime = Date.now();
  const { email, password } = req.body;
  const { platform } = req.headers;
  const staff = await staffService.getStaff.getStaffWithPassword({ email: email });
  if (!staff.length) {
    const error = new Error('Staff Not exist!');
    error.status = 401;
    throw error;
  }

  const isCorrectPassword = await PasswordServ.match(password, staff[0].password);
  if (!isCorrectPassword) {
    const error = new Error('Incorrect Password');
      error.status = 403;
      const log = {
          status: 'error',
          logingTime: currentTime,
          platform,
          loginIp: req.headers['x-forwarded-for'] || req.connection.remoteAddress
      }
      if (staff[0].loginActivity.length >= 40) {
        await staff[0].loginActivity.shift();
        await staff[0].loginActivity.push(log);
      } else {
          staff[0].loginActivity.push(log);
      }
      return next(error);
  }
  const log = {
    status: 'success',
    logingTime: currentTime,
    platform,
    loginIp: req.headers['x-forwarded-for'] || req.connection.remoteAddress
  }
  if (staff[0].loginActivity.length >= 40) {
      await staff[0].loginActivity.shift();
      await staff[0].loginActivity.push(log);
  } else {
      staff[0].loginActivity.push(log);
  }
  let tokenData;
  if(staff[0].companyId) {
    tokenData = {
      staffId: staff[0]._id,
      firstName: staff[0].firstName,
      companyId: staff[0].companyId,
      role: staff[0].role,
    };
  } else {
    tokenData = {
      staffId: staff[0]._id,
      firstName: staff[0].firstName,
      role: staff[0].role,
    };
  }
  const otpToken = await TokenServ.generate(tokenData);
  res.json({ status: 200, message: 'Staff login successful', result: { token: otpToken } });
})
