const { staffService } = require('../../services');
const { PasswordServ, TokenServ } = require('../../utils/auth');

const inValidLinkError = (message = 'Invalid Link') => {
    const error = new Error(message);
    return error.status = 400;
};

async function reset_password(req, res, next) {
    try {
        const {
            otp: otpToken,
            password
        } = req.body;
        const { otp } = await TokenServ.verify(otpToken);
        console.log(otp);
        let staff = await staffService.getStaff({ otp: otp });
        if (!staff.length || !staff[0].otp) {
            const message = 'Invalid Link / Link Expired';
            return inValidLinkError(next, message);
        }
        console.log('staff', staff);
        if (!staff[0].isActive) {
            staff[0].isActive = true;
        }
        staff[0].password = await PasswordServ.hash(password);
        staff[0].isEmailVerified = await true;
        staff[0].passwordReset.push({ status: 'resolved' });
        staff[0].otp = await undefined;
        let result = await staffService.createStaffService(staff[0])
        res.json({ status: 200, message: 'Password Updated Successfully.. ', result: result })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    reset_password
}