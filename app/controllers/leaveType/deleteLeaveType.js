const { deleteById } = require('../../services/LeaveTypeServices/deleteLeaveType');

async function deleteLeaveTypes(req, res, next) {
    try {
        let leaveTypeId = req.params.id;
        const result = await deleteById(leaveTypeId);
        res.json({ status: 200, message: 'Leave Type deleted successfully',
          result: result
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    deleteLeaveTypes
}