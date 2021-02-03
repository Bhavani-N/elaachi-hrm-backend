const { createProject } = require('../../services/projectServices/createProject');
const { getProjectByQuery } = require('../../services/projectServices/getProject');

async function createProjects(req, res, next) {
    try {
        const findProject = await getProjectByQuery({
            projectName: req.body.projectName
        });
        if (!findProject) {
            const result = await createProject(req.body);
            res.json({ status: 200, message: 'Project created successfully', result: result })
        } else {
            res.json({ status: 200, message: 'Project Name exist' })
        }
    } catch (error) {
        next(error); 
    }
}

module.exports = {
    createProjects
}

