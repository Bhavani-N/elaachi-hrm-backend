const staffRoutes = require('./staff/staff');
const taskRoutes = require('./task/task');
const projectRoutes = require('./project/project');
const authRoutes = require('./auth');
const companyRoutes = require('./company/companyRoute');
const leaveTypeRoutes = require('./leaveType/leaveType');
const userLeaveRoutes = require('./userLeave/userLeave');
const attendanceRoutes = require('./attendance/attendance');
const payslipRoutes = require('./payslip/payslip');
const uploadRoutes = require('./upload/index');

module.exports = app => {
    app.use('/api/v1/auth', authRoutes);
    app.use('/api/v1/staffs', staffRoutes);
    app.use('/api/v1/tasks', taskRoutes);
    app.use('/api/v1/projects', projectRoutes);
    app.use('/api/v1/company', companyRoutes);
    app.use('/api/v1/leaveType', leaveTypeRoutes);
    app.use('/api/v1/userLeave', userLeaveRoutes);
    app.use('/api/v1/attendance', attendanceRoutes);
    app.use('/api/v1/payslip', payslipRoutes);
    app.use('/api/v1/files', uploadRoutes);
}