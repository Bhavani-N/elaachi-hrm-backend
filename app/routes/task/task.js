const express = require('express');
const router = express.Router();

const { createTask,
    getTask,
    updateTask,
    deleteTask } = require('../../controllers/task');

const { AuthServ } = require("../../utils/auth");

router
    .route('/')
    .post(AuthServ.authorize(), createTask.createTasks)
    .get(AuthServ.authorize(), getTask.getAllTask);

router.route('/list/:year').get(AuthServ.authorize(), getTask.getTaskByStartDates);
router.route('/list').get(AuthServ.authorize(), getTask.getAllTaskByQuery);

router
    .route('/:id')
    .get(AuthServ.authorize(), getTask.getTasksByID)
    .put(AuthServ.authorize(), updateTask.updateTasks)
    .delete(AuthServ.authorize(), deleteTask.deleteTasks)


module.exports = router;