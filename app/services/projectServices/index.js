const { createProject } = require('./createProject');
const { deleteById, deleteByQuery } = require('./deleteProject');
const { getProjectById,
getProjectByQuery,
getAllProjects } = require('./getProject');
const { updateProject } = require('./updateProject');

module.exports = {
    createProject, deleteById, deleteByQuery, getProjectById,
    getProjectByQuery,
    getAllProjects ,updateProject
} 