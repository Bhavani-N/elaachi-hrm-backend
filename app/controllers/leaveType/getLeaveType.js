const { getLeaveTypeById, getLeaveTypeByQuery, getAllLeaveTypes } = require('../../services/LeaveTypeServices/getLeaveType');

async function getAllLeaveType(req, res, next) {
    try {
        const page = parseInt(req.query.page)
        const result = await getAllLeaveTypes(page);
        res.json({ status: 200, message: 'Leave Type details', result: result })
    } catch (error) {
        next(error);
    }
}

async function getLeaveTypesByID(req, res, next) {
    try {
        const result = await getLeaveTypeById(req.params.id);
        res.json({ status: 200, message: 'Leave Type Details fetched', result: result })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllLeaveType,
    getLeaveTypesByID
}