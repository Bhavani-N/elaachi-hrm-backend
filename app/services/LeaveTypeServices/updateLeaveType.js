const { LeaveType } = require('../../database');

async function updateLeaveType(id, data) {
    return new Promise(async(resolve, reject) => {
        try {
            let result = await LeaveType.findOneAndUpdate({_id: id}, data, { new: true }).exec();
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    updateLeaveType
}