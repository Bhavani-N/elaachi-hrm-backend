const express = require('express');
const router = express.Router();

const { createProject,
    getProject,
    updateProject,
    deleteProject  } = require('../../controllers/project');

const { AuthServ } = require("../../utils/auth");

router
    .route('/')
    .post(AuthServ.authorize(), createProject.createProjects)
    .get(AuthServ.authorize(), getProject.getAllProject);

router
    .route('/:id')
    .get(AuthServ.authorize(), getProject.getProjectsByID)
    .put(AuthServ.authorize(), updateProject.updateProjects)
    .delete(AuthServ.authorize(), deleteProject.deleteProjects)

module.exports = router;