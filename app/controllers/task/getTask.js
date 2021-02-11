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

async function getTaskByStartDates(req, res, next) {
    try {
        let taskObj = req.body;
        const result = await taskService.getAllTasks();
        let startDate = new Date("2021-02-01");
        let endDate = new Date("2021-02-10");
        console.log('!!!!!!',db.tasks.find({$and:[{startDate:{$lte:new Date()}},{endDate:{$gte:new Date()}}]}));

        // console.log('...!!!', Object.values(result))
        let resultTaskData = Object.values(result).filter(function (a) {
            let hitDates = a.startDates || {}; // extract all dates
            // hitDates = Object.keys(hitDates);
            console.log('>>>>>>>',hitDates)
            hitDateMatchExists = hitDates.some(function (dateStr) {
                let date = new Date(dateStr);
                return date >= startDate && date <= endDate
            });
            return hitDateMatchExists;
        });
        console.log(resultTaskData);
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