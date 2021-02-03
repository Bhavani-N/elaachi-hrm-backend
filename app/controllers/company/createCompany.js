const { createCompany } = require('../../services/companyServices/createCompany');
const { getCompanyByQuery } = require('../../services/companyServices/getCompany');

async function createCompanies(req, res, next) {
    try {
        const findCompany = await getCompanyByQuery({
            companyName: req.body.name
        });
        if (!findCompany) {
            const result = await createCompany(req.body);
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

