const { createTask } = require('../../services/taskServices/createTask');

async function createTasks(req, res, next) {
    try {
        const data = req.body;
        const result = await createTask(data);
        res.json({ status: 200, message: 'Task created successfully', result: result });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createTasks
}

