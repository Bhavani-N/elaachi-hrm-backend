const express = require('express');
const router = express.Router();

const { createLeaveType,
    getLeaveType,
    updateLeaveType,
    deleteLeaveType  } = require('../../controllers/leaveType');

const { AuthServ } = require("../../utils/auth");

router
    .route('/')
    .post(AuthServ.authorize(), createLeaveType.createLeaveTypes)
    .get(AuthServ.authorize(), getLeaveType.getAllLeaveType);

router
    .route('/:id')
    .get(AuthServ.authorize(), getLeaveType.getLeaveTypesByID)
    .put(AuthServ.authorize(), updateLeaveType.updateLeaveTypesById)
    .delete(AuthServ.authorize(), deleteLeaveType.deleteLeaveTypes)

module.exports = router;