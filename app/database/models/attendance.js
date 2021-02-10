const mongoose = require('mongoose');
const { Schema } = mongoose;
const taskId = require('./task');

const attendanceSchema = new Schema({
    dates: { type: Date },
    dayType: { type: String },
    inTime: { type: Number },
    outTime: { type: Number },
    timeLog: { type: Number },
    total: { type: Number },
    onDuty:  [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'taskId'
        }
    ]
})

const Attendance = mongoose.model('Attendance', attendanceSchema);
module.exports = Attendance;