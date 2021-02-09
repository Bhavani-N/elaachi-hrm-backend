const { taskService } = require('../../services');
const { Task } = require('../../database');

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

async function getWeeklyPlan(req, res, next) {
    try {
        const year = req.params.year * 1;
        const plan = await Task.aggregate([
            {
            $unwind: '$startDates'
            },
            {  
            $match: {
                startDates: {
                $gte: new Date(`${year}-02-01`),
                $lte: new Date(`${year}-02-07`)
                }
            }
            },
            {
            $group: {
                _id: { $month: '$startDates' },
                numTaskStarts: { $sum: 1 },
                tasks: { $push: '$taskName' }
            }
            },
            {
            $limit: 07
            }
        ])
    }catch (error) {
        next(error);
    }
}



module.exports = {
    getAllTask,
    getTasksByID,
    getWeeklyPlan
}