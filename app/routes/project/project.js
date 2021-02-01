const express = require('express');
const router = express.Router();

const { createProject,
    getProject,
    updateProject,
    deleteProject  } = require('../../controllers/project');

router
    .route('/')
    .post(createProject.createProjects)
    .get(getProject.getAllProject);

router
    .route('/:id')
    .get(getProject.getProjectsByID)
    .put(updateProject.updateProjects)
    .delete(deleteProject.deleteProjects)

module.exports = router;