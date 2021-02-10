const express = require('express');
const router = express.Router();

const { createTask,
    getTask,
    updateTask,
    deleteTask } = require('../../controllers/task');

router
    .route('/')
    .post(createTask.createTasks)
    .get(getTask.getAllTask);

router.route('/list/:project').get(getTask.getAllTasksByProject);

router
    .route('/:id')
    .get(getTask.getTasksByID)
    .put(updateTask.updateTasks)
    .delete(deleteTask.deleteTasks)


module.exports = router;