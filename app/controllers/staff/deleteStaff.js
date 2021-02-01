const { staffService } = require('../../services')

async function deleteStaff(req, res, next) {
    try {
        const company = req.tokenData.companyId;
        const result = await staffService.deleteStaff({$and:[{ _id: req.params.id},{ companyId:company }]}, { $set: { isDeactived: true } });
        res.json({ status: 200, message: 'staff deleted successfully', result: result });
    } catch (error) {
        next(error)
    }
}

module.exports = {
    deleteStaff
}