const { updateProject } = require('../../services/projectServices');

async function updateProjects(req, res, next) {
    try {
        let projectId = req.params.id;
        let projectData = req.body;
        const result = await updateProject(projectId, projectData);
        res.json({ status: 200, message: 'Project updated successfully', result: result })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    updateProjects
}