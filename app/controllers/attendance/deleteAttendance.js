const { deleteById } = require('../../services/attendanceServices/deleteAttendance');

async function deleteAttendances(req, res, next) {
    try {
        let attendanceId = req.params.id;
        const result = await deleteById(attendanceId);
        res.json({ status: 200, message: 'Attendance details deleted successfully',
          result: result
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    deleteAttendances
}