const { updateLeaveType,updateLeaveTypeById } = require('../../services/LeaveTypeServices/updateLeaveType');

async function updateLeaveTypes(req, res, next) {
    try {
        const result = await updateLeaveType(req.params.id, req.body);
        res.json({ status: 200, message: 'Leave Type updated successfully', result: result })
    } catch (error) {
        next(error);
    }
}

async function updateLeaveTypesById(req, res, next) {
    try {
        const result = await updateLeaveTypeById(req.params.id, req.body);
        res.json({ status: 200, message: 'Leave Type updated successfully', result: result })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    updateLeaveTypes,
    updateLeaveTypesById
}