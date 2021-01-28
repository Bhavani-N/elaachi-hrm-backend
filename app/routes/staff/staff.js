const express = require('express');
const router = express.Router();

const { createStaffService,
    deleteStaff,
    getStaff,
    updateStaff } = require('../../services/staffServices');

router
    .route('/')
    .post(createStaffService.createStaffService)
    .get(getStaff.getStaffWithPassword);

router
    .route('/:id')
    // .get(getStaff.getStaff)
    .patch(updateStaff.updateStaff)
    .delete(deleteStaff.deleteStaff)

// router.patch('/updateStaff', updateStaff.updateStaff);
// router.delete('/deleteStaff', deleteStaff.deleteStaff);

module.exports = router;