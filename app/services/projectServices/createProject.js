const { Project } = require('../../database');

async function createProject(data) {
    return new Promise(async(resolve, reject) => {
        try {
            const projectDetails = new Project(data);
            const result = await projectDetails.save();
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = { 
    createProject
}