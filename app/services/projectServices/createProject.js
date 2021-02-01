const { Project } = require('../../database');

async function createProject(data) {
    return new Promise(async(resolve, reject) => {
        try {
            const projectDetails = new Project.Project(data);
            const result = await result.save();
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createProject
}