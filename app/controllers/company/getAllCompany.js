const { getAllCompanies } = require('../../services/companyServices/getCompany');

async function getAllCompany(req, res, next) {
    try {
        let companyObject = req.body;
        let filters = {};
        filters.query = {};
        filters.pageNum = {};
        filters.pageSize = {};

        const result = await getAllCompanies(filters);
        res.json({ status: 200, message: 'Company details', result: result })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllCompany
}