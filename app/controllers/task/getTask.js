const { taskService } = require('../../services');
const { projectService } = require('../../services')
const { Task } = require('../../database');

async function getAllTask(req, res, next) {
    try {
        let taskObj = req.body;
        const page = parseInt(req.query.page)
        const result = await taskService.getAllTasks(page);
        res.json({ status: 200, message: 'Task details', results: result.length, data: result })
    } catch (error) {
        next(error);
    } 
}

async function getAllTaskByQuery(req, res, next) {
    try {
        let filter = {};
        if (req.query.taskName) filter = { taskName: req.query.taskName } ;
        const result = await taskService.getTaskByQuery(filter);
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

async function getTaskByStartDates(req, res, next) {
    try {
        const date1 = req.params.date1;
        const date2 = req.params.date2;
        const result = await taskService.getAllTasks();
        let startDate = new Date(`${date1}`);
        let endDate = new Date(`${date2}`);
        let resultTaskData = Object.values(result).filter(a => {
            var date = new Date(a.startDate);
            console.log(date);
            return (date >= startDate && date <= endDate);
        });
        console.log(resultTaskData)
        res.json({ status: 200, message: 'Task details', results: resultTaskData.length, data: resultTaskData })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllTask,
    getTasksByID,
    getTaskByStartDates,
    getAllTaskByQuery
}