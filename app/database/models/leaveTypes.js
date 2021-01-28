const mongoose = require('mongoose');
const { Schema } = mongoose;
const Company = require('./company');

const leaveTypeSchema = new Schema({
    name: { type: String },
    companyId:  [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Company'
        }
    ],
    colorCode: { type: String },
    Date: { type: Date }
});

const LeaveType = mongoose.model('LeaveType', leaveTypeSchema);
module.exports = LeaveType;