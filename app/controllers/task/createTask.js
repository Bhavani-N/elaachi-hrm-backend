const { createTask } = require('../../services/taskServices/createTask');
const { getTaskByQuery } = require('../../services/taskServices/getTask');

async function createTasks(req, res, next) {
    try {
        const findTask = await getTaskByQuery({
            taskName: req.body.taskName
        });
        if (!findTask) {
            const result = await createTask(req.body);
            res.json({ status: 200, message: 'Task created successfully', result: result })
        } else {
            res.json({ status: 200, message: 'Task Name exist' })
        }
    } catch (error) {
        next(error); 
    }
}

module.exports = {
    createTasks
}

