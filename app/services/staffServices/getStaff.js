const Staff = require('../../database');

async function getStaff() {
  return new Promise(async(resolve, reject) => {
      try {
          let result = await  Staff.Staff.find().populate('companyId').exec();
          resolve(result)
      } catch (error) {
          reject(error)
      }
  })
}

async function getStaffById(id) {
  return new Promise(async(resolve, reject)=> {
      try {
          let data = await Staff.Staff.findById(id).exec();
          resolve(data)
      } catch (error) {
          reject(error)
      }
  })
}

async function getStaffWithPassword(query) {
  return new Promise(async(resolve, reject) => {
    try {
      let result = await Staff.Staff.find(query).populate('companyId').exec();
      resolve(result)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  getStaff,
  getStaffById,
  getStaffWithPassword
}