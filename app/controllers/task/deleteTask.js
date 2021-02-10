const { deleteById } = require('../../services/taskServices/deleteTask');

async function deleteTasks(req, res, next) {
    try {
        let taskId = req.params.id;
        const result = await deleteById(taskId);
        res.json({ status: 200, message: 'Task deleted successfully',
          result: result
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    deleteTasks
}