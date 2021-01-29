const db = require('./db');

const Staff = require('./models/staff');
const Task = require('./models/task');
const Company = require('./models/company');
const LeaveType = require('./models/leaveTypes');
const project = require('./models/project');
const userLeave = require('./models/userLeaves');

module.exports = {
    Staff,
    Task,
    Company,
    LeaveType,
    project,
    userLeave
}