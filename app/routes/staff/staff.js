const express = require('express');
const router = express.Router();

const {
    createStaff,
    getStaff,
    updateStaff,
    deleteStaff
} = require('../../controllers/staff');

router
    .route('/')
    .post(createStaff.createStaff)
    .get(getStaff.getStaff)
    .put(updateStaff.updateStaffDetails)

router
    .route('/:id')
    .get(getStaff.getStaffById)
    .put(updateStaff.updateStaff)
    .delete(deleteStaff.deleteStaff)

module.exports = router;