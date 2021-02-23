const mongoose = require('mongoose');
const { Schema } = mongoose;
const LeaveType = require('./leaveTypes');
const Staff = require('./staff');

const options = {
    timestamps: true
};

const userLeaveSchema = new Schema({
    leaveTypeId: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'LeaveType'
        }
    ],
    staffId: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Staff'
        }
    ],
    status: { type: String, enum: ['PENDING','APPROVED', 'DENIED'], default: 'PENDING' },
    leaveReason: { type: String },
    dateFrom: { type: Date },
    dateTo: { type: Date },
    approved: { type: Number },
    deniedReason: { type: String },
    // createdAt: { type: Date },
    fileChosen: { type: String },
    reviewedBy: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Staff'
        }
    ],
}, options);

const UserLeave = mongoose.model('UserLeave', userLeaveSchema);
module.exports = UserLeave;