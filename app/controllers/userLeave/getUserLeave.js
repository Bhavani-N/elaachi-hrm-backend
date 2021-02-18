const { getAllUserLeaves, getUserLeaveById } = require('../../services/userLeavesServices/getUserLeave');
const { UserLeave } = require('../../database')

// async function getAllUserLeave(req, res, next) {
//     try {
//         // const queryObj = { ...req.query };
//         // let queryStr = JSON.stringify(queryObj);
//         // let query = userLeave.find(JSON.parse(queryStr));
//         // if (req.query.sort) {
//         //     const sortBy = req.query.sort.split(',').join(' ');
//         //     console.log(sortBy)
//         //     query = query.sort(sortBy);
//         // } else {
//         //     query = query.sort('-createdAt');
//         // }
//         // let leaveTypeId = req.params.leaveTypeId;
//         // let filters = {};
//         // filters.query = {
//         //     leaveTypeId: leaveTypeId
//         // };
//         // filters.pageNum = req.body.pageNum;
//         // filters.pageSize = req.body.pageSize;
//         // const result = await getAllUserLeaves(filters);
//         const pageSize = +req.query.pagesize;
//         const currentPage = +req.query.page;
//         const postQuery = UserLeave.find();
//         let fetchedPosts;
//         if (pageSize && currentPage) {
//           postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
//         }
//         // const result = await getAllUserLeaves();
//         res.json({ status: 200, message: 'User Leave details', result: result.length, data: result })
//     } catch (error) {
//         next(error);
//     }
// }

async function getAllUserLeave(req, res, next) {
    try {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit);
        const skip = parseInt(req.query.skip);
        // const result = await getAllUserLeaves(limit, skip);
        const result = await getAllUserLeaves(page);
        res.json({ status: 200, message: 'User Leave details', result: result.length, data: result })
    } catch (error) {
        next(error);
    }
}

async function getUserLeavesByID(req, res, next) {
    try {
        const result = await getUserLeaveById(req.params.id);
        res.json({ status: 200, message: 'User Leave details fetched', result: result })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllUserLeave,
    getUserLeavesByID
}