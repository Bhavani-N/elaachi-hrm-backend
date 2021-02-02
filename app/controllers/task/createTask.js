const { createTask } = require('../../services/taskServices/createTask');
const { getTaskByQuery } = require('../../services/taskServices/getTask');

async function createTasks(req, res, next) {
    try {
        let taskObj = req.body;
        let query = {
            name: taskObj.taskName
        }
        const findTask = await getTaskByQuery(query);
        if (!findTask) {
            const result = await createTask(taskObj);
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

