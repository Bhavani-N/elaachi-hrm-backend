const { createTask } = require('./createTask');
const { deleteById, deleteByQuery } = require('./deleteTask');
const {  getTaskById, getTaskByQuery, getAllTasks } = require('./getTask');
const { updateTask } = require('./updateTask');

module.exports = {
    createTask, deleteById, deleteByQuery, getTaskById,
    getTaskByQuery,
    getAllTasks , updateTask
} 