const { Project } = require('../../database');

async function getProjectById(id) {
  return new Promise(async(resolve, reject)=> {
      try {
          let data = await Project.Project.findById(id).exec();
          resolve(data)
      } catch (error) {
          reject(error)
      }
  })
}

async function getAllProjects() {
  return new Promise(async(resolve, reject) => {
      try {
          let data = await Project.Project.find();
          resolve(data)
      } catch (error) {
          reject(error)
      }
  })
}

module.exports = {
  getProjectById,
  getAllProjects
}