const { projectService } = require('../../services')

async function getAllProject(req, res, next) {
    try {
        let projectObj = req.body;
        const page = parseInt(req.query.page)
        const result = await projectService.getAllProjects(page);
        res.json({ status: 200, message: 'Project details', result: result })
    } catch (error) {
        next(error);
    }
}

async function getProjectsByID(req, res, next) {
    try {
        let projectId = req.params.id;
        const result = await projectService.getProjectById(projectId);
        res.json({ status: 200, message: 'Project Details fetched', result: result })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllProject,
    getProjectsByID
}