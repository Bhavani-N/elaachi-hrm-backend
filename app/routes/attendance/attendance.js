const express = require('express');
const router = express.Router();

const { createAttendance,
    getAttendance,
    updateAttendance,
    deleteAttendance } = require('../../controllers/attendance');

const { AuthServ } = require("../../utils/auth");

router
    .route('/')
    .post(AuthServ.authorize(), createAttendance.createAttendances)
    .get(AuthServ.authorize(), getAttendance.getAllAttendanceList);

router
    .route('/:id')
    .get(AuthServ.authorize(), getAttendance.getAttendanceListByID)
    .put(AuthServ.authorize(), updateAttendance.updateAttendanceList)
    .delete(AuthServ.authorize(), deleteAttendance.deleteAttendances)

module.exports = router;