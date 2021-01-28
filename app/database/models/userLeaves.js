const mongoose = require('mongoose');
const { Schema } = mongoose;
const LeaveType = require('./leaveTypes');
const Staff = require('./staff');

const userLeaveSchema = new Schema({
    LeaveTypeId:  [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'LeaveType'
        }
    ],
    Date: { type: Date },
    staffId: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Staff'
        }
    ]
});

const UserLeave = mongoose.model('UserLeave', userLeaveSchema);
module.exports = UserLeave;