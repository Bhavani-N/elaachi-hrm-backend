const Staff = require('../../database/models/staff/index');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');

// exports.getStaff = catchAsync(async(req, res, next) => {
//   let result = await Staff.findById(req.params.id); 

//   if(!result) {
//     return next(new AppError('No document found with that ID', 404));
//   }

//   res.status(200).json({
//     status: 'success',
//     data: {
//       data: result
//     }
//   });
// });

// exports.getAllStaffs =  catchAsync(async (req, res, next) => {
//   const staffs = await Staff.find();

//   // SEND RESPONSE
//   res.status(200).json({
//       status: 'success',
//       results: staffs.length,
//       data: {
//           staffs
//       }
//   });
// });

async function getStaffWithPassword(query) {
  return new Promise(async(resolve, reject) => {
    try {
      let result = await Staff.find(query).exec();
      resolve(result)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  getStaffWithPassword
}