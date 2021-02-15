const db = require('./db');

const Staff = require('./models/staff');
const Task = require('./models/task');
const Company = require('./models/company');
const LeaveType = require('./models/leaveTypes');
const Project = require('./models/project');
const userLeave = require('./models/userLeaves');
const Attendance = require('./models/attendance');

module.exports = {
    Staff,
    Task,
    Company,
    LeaveType,
    Project,
    userLeave,
    Attendance
}