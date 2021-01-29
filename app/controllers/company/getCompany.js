const { getCompanyById } = require('../../services/companyServices/getCompany');

async function getCompanies(req, res, next) {
    try {
        let companyId = req.params.id;
        const result = await getCompanyById(companyId);
        res.json({ status: 200, message: 'Company Details fetched', result: result })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getCompanies
}