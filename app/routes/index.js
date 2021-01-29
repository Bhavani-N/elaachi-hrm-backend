const staffRoutes = require('./staff/staff');
const taskRoutes = require('./task/task');
const projectRoutes = require('./project/project');
const authRoutes = require('./auth');
const companyRoutes = require('./company/companyRoute');

module.exports = app => {
    app.use('/api/v1/auth', authRoutes)
    app.use('/api/v1/staffs', staffRoutes);
    app.use('/api/v1/tasks', taskRoutes);
    app.use('/api/v1/projects', projectRoutes);
    app.use('/api/v1/company', companyRoutes);
}