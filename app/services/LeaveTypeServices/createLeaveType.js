const { LeaveType } = require('../../database');

async function createLeaveType(data) {
    return new Promise(async(resolve, reject) => {
        try {
            const result = new LeaveType(data);
            const LeaveTypeData = await result.save();
            resolve(LeaveTypeData)
        }catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createLeaveType
}