const { createAttendance } = require('./createAttendance');
const { deleteAttendance } = require('./deleteAttendance');
const { getAttendance } = require('./getAttendance');
const { updateAttendance } = require('./updateAttendance');

module.exports = {
    createAttendance,
    deleteAttendance,
    getAttendance,
    updateAttendance
}