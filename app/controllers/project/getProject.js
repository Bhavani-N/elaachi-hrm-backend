const { projectService } = require('../../services')

async function getAllProject(req, res, next) {
    try {
        let projectObj = req.body;
        // let filters = {};
        // filters.query = {};
        // filters.pageNum = {};
        // filters.pageSize = {};

        const result = await projectService.getAllProjects();
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