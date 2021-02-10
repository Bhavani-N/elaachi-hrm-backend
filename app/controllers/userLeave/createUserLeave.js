const { createUserLeave } = require('../../services/userLeavesServices/createUserLeave');

async function createUserLeaves(req, res, next) {
    try {
        const data = req.body;
        const result = await createUserLeave(data);
        res.json({ status: 200, message: 'Created successfully!', result: result });
    } catch (error) {
        next(error); 
    }
}

module.exports = {
    createUserLeaves
}

