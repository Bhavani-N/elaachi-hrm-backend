const { staffService } = require('../../services')
const { PasswordServ, TokenServ } = require('../../utils/auth');

async function createStaff(req, res, next) {
    try {
        const data = req.body;
        const staff = await staffService.getStaff({ email: data.email })

        if (staff.length) {
            const error = new Error('staff with same email Id or regId already exist!');
            error.status = 409;
            throw error;
        }
        const password = await PasswordServ.hash(data.password);
        data.password = password
        const result = await staffService.createStaffService(data);
        const tokenData = {
            username: result.firstName,
            companyId: result.companyId,
        };
        const otpToken = await TokenServ.generate(tokenData);
        res.json({ status: 200, message: 'staff created successfully', result: result, otpToken});
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createStaff
}