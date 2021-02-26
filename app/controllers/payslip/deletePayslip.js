const { deleteById } = require('../../services/payslipServices/deletePayslip');

async function deletePaySlips(req, res, next) {
    try {
        let paySlipId = req.params.id;
        const result = await deleteById(paySlipId);
        res.json({ status: 200, message: 'Pay slips deleted successfully',
          result: result
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    deleteUserLeaves
}