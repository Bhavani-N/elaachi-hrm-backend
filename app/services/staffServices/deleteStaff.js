const { Staff } = require('../../database')

async function deleteStaff(id, isDeactivated) {
    return new Promise(async(resolve, reject)=> {
        try {
            const result = await Staff.Staff.findOneAndUpdate(id, isDeactived);
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    deleteStaff
}

// exports.deleteStaff = catchAsync(async(req, res, next) => {

//     const result = await Staff.findByIdAndDelete(req.params.id);

//     if(!result) {
//         return next(new AppError('No document found with that ID', 404));
//     }
//     res.status(204).json({
//         status: 'success',
//         data: null
//     });
// });

