const { v4: uuidv4 } = require('uuid');
const { staffService } = require('../../services');
const { SendPasswordResetMail } = require('../../utils/mail');
const TokenServ = require('../../utils/auth');

async function forgot_Password(req, res, next) {
    try {
        const { email } = req.body;
        const staff = await staffService.getStaff({ email: email });
        if(!staff.length) {
            const error = new Error('User Not Exist');
            error.status = 400;
            return next(error);
        }
        const otp = uuidv4();
        const otpToken  = await TokenServ.generate({ otp });
        staff[0].passwordReset.push({ status: 'raised' });
        staff[0]['otp']= otp;
        await staffService.createStaffService(staff[0])
        SendPasswordResetMail.send(otpToken, email)
            .then(data => {})
            .catch(error => console.error(error));
            res.json({ status: 200, message: 'Password Reset Email Sent To Your Email.. Please Use That Link To Reset Your Password' })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    forgot_Password
}