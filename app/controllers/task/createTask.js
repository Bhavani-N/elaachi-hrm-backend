const { createTask } = require('../../services/taskServices/createTask');
const { getTaskByQuery } = require('../../services/taskServices/getTask');
const { updateTask } = require('../../services/taskServices/updateTask')

async function createTasks(req, res, next) {
    try {
        const findTask = await getTaskByQuery({
            taskName: req.body.taskName
        });
        if (!findTask) {
            const result = await createTask(req.body);
            const prjType = await updateTask({ _id: req.body.project }, 
                {
                    $push: { Project: result._id }
                })
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

