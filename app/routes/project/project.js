const express = require('express');
const router = express.Router();

const { createProject, deleteProject, getProject, updateProject } = require('../../services/projectServices');

router
    .route('/')
    .post(createProject.createProject)
    .get(getProject.getAllProjects);

router
    .route('/:id')
    .get(getProject.getProjectById)
    .patch(updateProject.updateProject)
    .delete(deleteProject.deleteById)

module.exports = router;