const { Attendance } = require('../../database');

async function updateAttendance(id, data) {
    return new Promise(async(resolve, reject) => {
        try {
            let result = await Attendance.findOneAndUpdate({_id: id}, data, { new: true }).exec();
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    updateAttendance
}