const { createAttendance } = require('../../services/attendanceServices/createAttendance');

async function createAttendances(req, res, next) {
    try {
        const data = req.body;
        const result = await createAttendance(data);
        res.json({ status: 200, message: 'Created successfully!', result: result });
    } catch (error) {
        next(error); 
    }
}

module.exports = {
    createAttendances
}

