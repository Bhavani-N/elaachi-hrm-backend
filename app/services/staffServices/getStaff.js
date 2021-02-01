const Staff = require('../../database');

async function getStaff(query) {
  return new Promise(async(resolve, reject) => {
      try {
          let result = await  Staff.Staff.find(query).populate('companyId').exec();
          resolve(result)
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
  getStaffWithPassword
}