const express = require('express');
const router = express.Router();

const { createUserLeave,
    getUserLeave,
    updateUserLeave,
    deleteUserLeave  } = require('../../controllers/userLeave');

const { AuthServ } = require("../../utils/auth");

router
    .route('/')
    .post(AuthServ.authorize(), createUserLeave.createUserLeaves)
    .get(AuthServ.authorize(), getUserLeave.getAllUserLeave);

router.route('/:date1/:date2').get(AuthServ.authorize(), getUserLeave.getLeaveByStartDates);

router
    .route('/:id')
    .get(AuthServ.authorize(), getUserLeave.getUserLeavesByID)
    .put(AuthServ.authorize(), updateUserLeave.updateUserLeaves)
    .delete(AuthServ.authorize(), deleteUserLeave.deleteUserLeaves)

module.exports = router;