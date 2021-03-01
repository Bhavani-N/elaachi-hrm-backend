const { updatePaySlip } = require('../../services/payslipServices');

async function updatePaySlips(req, res, next) {
    try {
        const result = await updatePaySlip(req.params.id, req.body);
        res.json({ status: 200, message: 'Payslip updated successfully', result: result })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    updatePaySlips
}