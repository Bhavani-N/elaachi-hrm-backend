const { createLeaveType } = require('../../services/LeaveTypeServices/createLeaveType');
const { getLeaveTypeByQuery } = require('../../services/LeaveTypeServices/getLeaveType');

async function createLeaveTypes(req, res, next) {
    try {
        const findLeaveType = await getLeaveTypeByQuery({
            name: req.body.name
        });
        if (!findLeaveType) {
            const result = await createLeaveType(req.body);
            res.json({ status: 200, message: 'LeaveType created successfully', result: result })
        } else {
            res.json({ status: 200, message: 'LeaveType Name exist' })
        }
    } catch (error) {
        next(error); 
    }
}

module.exports = {
    createLeaveTypes
}

