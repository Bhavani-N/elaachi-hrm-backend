const { staffService } = require('../../services')
const { PasswordServ } = require('../../utils/auth');

async function updateStaff(req, res, next) {
    let data = req.body;
    let id = req.params.id;
    let company = req.tokenData.companyId;
    if (req.query.type === 'password') {
        const result = await staffService.getStaff({ isDeactived: false, "_id": id }, { companyId: company });
        const isCorrectPassword = await PasswordServ.match(data.password, result[0].password);
        if (!isCorrectPassword) {
            const error = new Error('Incorrect password');
            error.status = 401;
            throw error;
        }
        else {
            try {
                const newPassword = await PasswordServ.hash(data.newPassword);
                const result = await staffService.updateStaff({ _id: id, companyId: company }, { $set: { password: newPassword } });
                res.json({ status: 200, message: 'staff password updated successfully', result: result })
            } catch (error) {
                next(error)
            }
        }
    } else {
        try {
            const password = await PasswordServ.hash(data.password);
            data.password = password;
            const result = await staffService.updateStaff({ _id: id, companyId: company }, data);
            res.json({ status: 200, message: 'staff updated successfully', result: result })
        } catch (error) {
            next(error)
        }
    }
}

async function updateStaffDetails(req, res, next) {
    let data = req.body;
    let id = req.query.id;
    console.log(id);
    let company = req.tokenData.companyId;
    console.log(company);
    try {
        const result = await staffService.updateStaff({ _id:id, companyId: company }, data);
        console.log(result)
        res.json({ status: 200, message: 'staff updated successfully', result: result })
    } catch (error){
        next(error)
    }
}

module.exports = {
    updateStaff,
    updateStaffDetails
}
