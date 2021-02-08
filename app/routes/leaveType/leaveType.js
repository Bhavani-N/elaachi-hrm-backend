const express = require('express');
const router = express.Router();

const { createLeaveType,
    getLeaveType,
    updateLeaveType,
    deleteLeaveType  } = require('../../controllers/leaveType');

router
    .route('/')
    .post(createLeaveType.createLeaveTypes)
    .get(getLeaveType.getAllLeaveType);

router
    .route('/:id')
    .get(getLeaveType.getLeaveTypesByID)
    .put(updateLeaveType.updateLeaveTypes)
    .delete(deleteLeaveType.deleteLeaveTypes)

module.exports = router;