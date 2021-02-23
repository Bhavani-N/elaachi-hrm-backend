const { staffService } = require('../../services')

async function getStaff(req, res, next) {
    try {
        const page = parseInt(req.query.page)
        const result = await staffService.getStaff(page);
        if(result) {
            res.json({ status: 200, message: 'get staff details successfully', result: result })
        } else {
            res.status(404).json({ status: 404, message: 'No Data Found' });
        }
    } catch (error) {
        next(error)
    }
}

async function getAllStaffsByQuery(req, res, next) {
    try {
        let filter = {};
        if (req.query.firstName) filter = { firstName: req.query.firstName } ;
        const result = await staffService.getStaffWithPassword(filter);
        res.json({ status: 200, message: 'Staff details By Full Name', results: result.length, data: result })
    } catch (error) {
        next(error);
    } 
}

async function getStaffById(req, res, next) {
    try {
        let id = req.params.id;
        const company = req.tokenData.companyId;
        const result = await staffService.getStaffById({isDeactived: false, "_id": id },{companyId:company});
        res.json({ status: 200, message: 'get staff details by Id successfully', result: result, company })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getStaff,
    getStaffById,
    getAllStaffsByQuery
}