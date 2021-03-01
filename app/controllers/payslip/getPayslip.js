const { getPaySlipById,
    getPaySlipByQuery,
    getAllPaySlips } = require('../../services/payslipServices/getPayslip')

async function getAllPayslip(req, res, next) {
    try {
        const page = parseInt(req.query.page)
        const result = await getAllPaySlips(page);
        res.json({ status: 200, message: 'Payslip details', result: result })
    } catch (error) {
        next(error);
    }
}

async function getPayslipsByID(req, res, next) {
    try {
        const result = await getPaySlipById(req.params.id);
        res.json({ status: 200, message: 'Payslip Details fetched', result: result })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllPayslip,
    getPayslipsByID
}