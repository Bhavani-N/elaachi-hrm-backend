const { taskService } = require('../../services')

async function getAllTask(req, res, next) {
    try {
        let taskObj = req.body;
        // let filters = {};
        // filters.query = {};
        // filters.pageNum = {};
        // filters.pageSize = {};

        const result = await taskService.getAllTasks();
        res.json({ status: 200, message: 'Task details', result: result })
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

module.exports = {
    getAllTask,
    getTasksByID
}