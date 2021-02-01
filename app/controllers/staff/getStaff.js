const { staffService } = require('../../services')

async function getStaff(req, res, next) {
    try {
        const company = req.tokenData.companyId;
        const result = await staffService.getStaff({isDeactived: false},{companyId:company});
        // const result = await staffService.getStaff({isDeactived: false});
        res.json({ status: 200, message: 'get staff details successfully', result: result })
    } catch (error) {
        next(error)
    }
}

async function getStaffById(req, res, next) {
    try {
        let id = req.params.id;
        const company = req.tokenData.companyId;
        const result = await staffService.getStaff({isDeactived: false, "_id": id },{companyId:company});
        res.json({ status: 200, message: 'get staff details by Id successfully', result: result, company })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getStaff,
    getStaffById
}