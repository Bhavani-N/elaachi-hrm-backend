const { updateCompany } = require('../../services/companyServices');

async function updateCompanies(req, res, next) {
    try {
        let companyId = req.params.id;
        let companyData = req.body;
        const result = await updateCompany(companyId, companyData);
        res.json({ status: 200, message: 'Company updated successfully', result: result })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    updateCompanies
}