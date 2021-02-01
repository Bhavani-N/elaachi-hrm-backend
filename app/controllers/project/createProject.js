const { createProject } = require('../../services/projectServices/createProject');
const { getProjectByQuery } = require('../../services/projectServices/getProject');

async function createProjects(req, res, next) {
    try {
        let projectObj = req.body;
        let query = {
            name: projectObj.projectName
        }
        const findProject = await getProjectByQuery(query);
        if (!findProject) {
            const result = await createProject(projectObj);
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

