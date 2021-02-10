const express = require('express');
const router = express.Router();

const { createUserLeave,
    getUserLeave,
    updateUserLeave,
    deleteUserLeave  } = require('../../controllers/userLeave');

router
    .route('/')
    .post(createUserLeave.createUserLeaves)
    .get(getUserLeave.getAllUserLeave);

router
    .route('/:id')
    .get(getUserLeave.getUserLeavesByID)
    .put(updateUserLeave.updateUserLeaves)
    .delete(deleteUserLeave.deleteUserLeaves)

module.exports = router;