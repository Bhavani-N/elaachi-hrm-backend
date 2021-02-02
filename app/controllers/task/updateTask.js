const { updateTask} = require('../../services/taskServices');

async function updateTasks(req, res, next) {
    try {
        let taskId = req.params.id;
        let taskData = req.body;
        const result = await updateTask(taskId, taskData);
        res.json({ status: 200, message: 'Task updated successfully', result: result })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    updateTasks
}