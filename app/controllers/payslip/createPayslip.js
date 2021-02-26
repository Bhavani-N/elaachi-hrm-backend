const { createPaySlip } = require('../../services/payslipServices');

async function createPaySlips(req, res, next) {
    try {
        const data = req.body;
        const result = await createPaySlip(data);
        res.json({ status: 200, message: 'Created PaySlip successfully!', result: result });
    } catch (error) {
        next(error); 
    }
}

module.exports = {
    createPaySlips
}

