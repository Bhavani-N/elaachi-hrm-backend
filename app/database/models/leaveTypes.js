const mongoose = require('mongoose');
const { Schema } = mongoose;
const Company = require('./company');

const leaveTypeSchema = new Schema({
    type_name: { type: String },
    status: { type: String, enum: ['ACTIVE', 'INACTIVE'] },
    companyId:  [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Company'
        }
    ],
    availableLeave: { type: Number },
    colorCode: { type: String },
    Date: { type: Date }
});

const LeaveType = mongoose.model('LeaveType', leaveTypeSchema);
module.exports = LeaveType;