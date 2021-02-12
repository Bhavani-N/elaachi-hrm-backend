const { updateAttendance } = require('../../services/attendanceServices');

async function updateAttendanceList(req, res, next) {
    try {
        let attendanceId = req.params.id;
        let attendanceData = req.body;
        const result = await updateAttendance(attendanceId, attendanceData);
        res.json({ status: 200, message: 'Attendance updated successfully', result: result })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    updateAttendanceList
}