const { getPaySlipById, getPaySlipByQuery, getAllPaySlips } = require('../../services/payslipServices/getPayslip')
const { getStaffById } = require('../../services/staffServices/getStaff')

// async function getAllPayslip(req, res, next) {
//     try {
//         // const page = parseInt(req.query.page)
//         const result = await getAllPaySlips();
//         res.json({ status: 200, message: 'Payslip details', result: result })
//     } catch (error) {
//         next(error);
//     }
// }

async function getAllPayslip(req, res, next) {
    try {
        let filter = {};
        if (req.query.staffId) filter = { staffId: req.query.staffId } ;
        const result = await getAllPaySlips(filter);
        res.json({ status: 200, message: 'Payslip details By Staff ID',data: result.length, result: result })
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

async function getPayslipsByQuery(req, res, next) {
    try {
        let filter = {};
        if (req.query.staffId) filter = { staffId: req.query.staffId } ;
        const result = await  getPaySlipByQuery(filter);
        res.json({ status: 200, message: 'PaySlips By Staff', results: result.length, data: result })
    } catch (error) {
        next(error);
    } 
}

module.exports = {
    getAllPayslip,
    getPayslipsByID,
    getPayslipsByQuery
}