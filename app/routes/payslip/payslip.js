const express = require('express');
const router = express.Router();

const { createPayslip,
    getPayslip,
    updatePayslip,
    deletePayslip } = require('../../controllers/payslip');

const { AuthServ } = require("../../utils/auth");

router
    .route('/')
    .post(AuthServ.authorize(), createPayslip.createPaySlips)
    .get(AuthServ.authorize(), getPayslip.getAllPayslip);

router.route('/list').get(AuthServ.authorize(), getPayslip.getPayslipsByQuery);

router
    .route('/:id')
    .get(AuthServ.authorize(), getPayslip.getPayslipsByID)
    .put(AuthServ.authorize(), updatePayslip.updatePaySlips)
    .delete(AuthServ.authorize(), deletePayslip.deletePaySlips)

module.exports = router;