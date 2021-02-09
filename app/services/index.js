const staffService = require('./staffServices');
const taskService = require('./taskServices');
const projectService = require('./projectServices');
const companyService = require('./companyServices');
const leaveTypeService = require('./LeaveTypeServices');
const userLeaveService = require('./userLeavesServices');

module.exports = {
    staffService,
    taskService,
    projectService,
    companyService,
    leaveTypeService,
    userLeaveService
}