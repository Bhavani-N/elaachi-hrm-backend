const { getAllAttendance, getAttendanceById } = require('../../services/attendanceServices/getAttendance');

async function getAllAttendanceList(req, res, next) {
    try {
        const result = await getAllAttendance();
        res.json({ status: 200, message: 'Attendance details', result: result.length, data: result })
    } catch (error) {
        next(error);
    }
}

async function getAttendanceListByID(req, res, next) {
    try {
        const result = await getAttendanceById(req.params.id);
        res.json({ status: 200, message: 'Attendance details fetched', result: result })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllAttendanceList,
    getAttendanceListByID
}