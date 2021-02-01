const { staffService } = require('../../services');
const { TokenServ } = require('../../utils/auth');

const { URLSearchParams, URL } = require('url');

const config = require('../../../config/production/production');

const { HOST_ADDR } = config;
const inValidLinkError = (message = 'Invalid Link') => {
    const error = new Error(message);
    return error.status = 400;
};

const getRedirectURL = (paramsObj = {}, targetURL) => {
    const params = new URLSearchParams(paramsObj);
    const url = new URL(targetURL);
    url.search = params.toString();
    return url;
};

const errorRedirect = (message) => {
    const targetURL = `${HOST_ADDR.ui}/login`;
    const url = getRedirectURL({ message }, targetURL);
    return url;
};

async function VerifiedEmail(req, res, next) {

    try {
        const { verify, otp: otpToken } = req.query;
        if (!(verify === 'account') || !otpToken) {
            return inValidLinkError();
        }
        // const password = query.password;
        const { otp } = await TokenServ.verify(otpToken);
        const staff = await staffService.getStaff({ otp: otp });
        if (!staff.length || !staff[0].otp) {
            const message = 'Invalid Link / Link Expired';
            throw new Error(message);
            return;
        }
        staff[0].isEmailVerified = await true;
        staff[0].otp = await undefined;
        let result = await staffService.createStaffService(staff[0])
        res.json({ status: 200, message: 'Your Account Has Been Verified Successfully.. You Can Login Now..' })
    } catch (error) {
        let e = errorRedirect(error.message);
        next(e);

    }

}

module.exports = {
    VerifiedEmail
}
