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
        let taskObj = req.body;
        const year = req.params.year * 1;
        const result = await taskService.getAllTasks();
        let startDate = new Date(`${year}-02-01`);
        let endDate = new Date(`${year}-02-10`);
        let resultTaskData = Object.values(result).filter(a => {
            // let hitDates = a.startDates || {}; // extract all dates
            // // hitDates = Object.keys(hitDates);
            // hitDateMatchExists = hitDates.some(function (dateStr) {
            //     let date = new Date(dateStr);
            //     return date >= startDate && date <= endDate
            // }); 
            // return hitDateMatchExists;
            var date = new Date(a.startDates);
            return (date >= startDate && date <= endDate);
        });
        res.json({ status: 200, message: 'Task details', results: resultTaskData.length, data: resultTaskData })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllTask,
    getTasksByID,
    getTaskByStartDates
}