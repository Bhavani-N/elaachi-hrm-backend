const mongoose = require('mongoose');
const { Schema } = mongoose;
const Staff = require('./staff');

const options = {
    timestamps: true
};

const payslipSchema = new Schema({
    staffId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Staff'
    },
    month: { type: String },
    year: { type: Number },
    file: [{
        file: { type: String }
    }]
}, options);

const PaySlip = mongoose.model('PaySlip', payslipSchema);
module.exports = PaySlip;