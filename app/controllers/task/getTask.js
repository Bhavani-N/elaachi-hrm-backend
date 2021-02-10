const { taskService } = require('../../services');
const { projectService } = require('../../services')
const { Task } = require('../../database');

async function getAllTask(req, res, next) {
    try {
        let taskObj = req.body;
        const result = await taskService.getAllTasks();
        res.json({ status: 200, message: 'Task details', results: result.length, data: result })
    } catch (error) {
        next(error);
    }
}

async function getTasksByID(req, res, next) {
    try {
        let taskId = req.params.id;
        const result = await taskService.getTaskById(taskId);
        res.json({ status: 200, message: 'Task Details fetched', result: result })
    } catch (error) {
        next(error);
    }
}



async function getAllTasksByProject(req, res, next) {
    try {
        let project = req.params.project;
        let filters = {};
        filters.query = {
            project: project
        };
        filters.pageNum = req.body.pageNum;
        filters.pageSize = req.body.pageSize;
        const result = await taskService.getAllTasks(filters);
        const projectResult = await projectService.getProjectById(project);
        if(result.length > 0) {
            res.json({ 
                status: 200, message: 'List of Tasks', result: {
                    tasksData: result
                }
            })
        } else {
            res.json({ 
                status: 200, message: 'No project added to this task', result: {
                    tasksData: []
                }
            })
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllTask,
    getTasksByID,
    getAllTasksByProject
}