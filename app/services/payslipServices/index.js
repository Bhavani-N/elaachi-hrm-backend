const { createPaySlip } = require('./createPayslip');
const { deletePaySlip } = require('./deletePayslip');
const { getPaySlip } = require('./getPayslip');
const { updatePaySlip } = require('./updatePayslip');

module.exports = {
    createPaySlip,
    deletePaySlip,
    getPaySlip,
    updatePaySlip
}