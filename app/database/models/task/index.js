const mongoose = require('mongoose');
const { Schema } = mongoose;
const Project = require('../project')

const taskSchema = new Schema({
    taskName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    taskCode: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    startDates: [Date],
    endDates: [Date],
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    },
    project: {
        type: mongoose.Schema.ObjectId,
        ref: 'Project'
    },
    duration: [{
        dates: { type: Date },
        TimeTaken: { type: Number }
    }],
    billableHours: {
        type: Number
    }
},
    {
        timestamps: true,
    });

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;