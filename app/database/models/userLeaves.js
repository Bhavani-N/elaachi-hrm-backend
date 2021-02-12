const mongoose = require('mongoose');
const { Schema } = mongoose;
const LeaveType = require('./leaveTypes');
const Staff = require('./staff');

const userLeaveSchema = new Schema({
    leaveTypeId: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'LeaveType'
        }
    ],
    usedLeave: { type: Number },
    Date: { type: Date },
    staffId: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Staff'
        }
    ],
    note: { type: String },
    file: { type: String }
});

const UserLeave = mongoose.model('UserLeave', userLeaveSchema);
module.exports = UserLeave;