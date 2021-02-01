const express = require('express');
const router = express.Router();

const { createTask,
    deleteTask,
    getTask,
    updateTask } = require('../../services/taskServices');

router
    .route('/')
    .post(createTask.createTask)
    .get(getTask.getAllTasks);

router
    .route('/:id')
    .get(getTask.getTaskById)
    .put(updateTask.updateTask)
    .delete(deleteTask.deleteById)


module.exports = router;