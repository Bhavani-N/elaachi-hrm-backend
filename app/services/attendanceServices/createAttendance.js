const { Attendance } = require('../../database');

async function createAttendance(data) {
    return new Promise(async(resolve, reject) => {
        try {
            const result = new Attendance(data);
            const attendanceData = await result.save();
            resolve(attendanceData)
        }catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createAttendance
}