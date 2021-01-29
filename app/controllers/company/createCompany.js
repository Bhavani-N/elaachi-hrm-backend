const { createCompany } = require('../../services/companyServices/createCompany');
const { getCompanyByQuery } = require('../../services/companyServices/getCompany');

async function createCompanies(req, res, next) {
    try {
        let companyObj = req.body;
        let query = {
            name: companyObj.name
        }
        const findCompany = await getCompanyByQuery(query);
        if (!findCompany) {
            const result = await createCompany(companyObj);
            res.json({ status: 200, message: 'Company created successfully', result: result })
        } else {
            res.json({ status: 200, message: 'Company Name exist' })
        }
    } catch (error) {
        next(error); 
    }
}

module.exports = {
    createCompanies
}

