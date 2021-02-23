const express = require('express');
const router = express.Router();

const {
    createStaff,
    getStaff,
    updateStaff,
    deleteStaff
} = require('../../controllers/staff');

const { AuthServ } = require("../../utils/auth");

router
    .route('/')
    .post(AuthServ.authorize(), createStaff.createStaff)
    .get(AuthServ.authorize(), getStaff.getStaff)
    // .put(AuthServ.authorize(), updateStaff.updateStaffDetails)

router.route('/list').get(AuthServ.authorize(), getStaff.getAllStaffsByQuery);

router
    .route('/:id')
    .get(AuthServ.authorize(), getStaff.getStaffById)
    .put(AuthServ.authorize(), updateStaff.updateStaffsById)
    .delete(AuthServ.authorize(), deleteStaff.deleteStaff)

module.exports = router;