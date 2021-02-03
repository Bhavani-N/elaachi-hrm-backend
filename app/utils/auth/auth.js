const TokenServ = require('./token');

const roles = {
    admin: 'administrator',
    HR: 'hr',
    Employee: 'employee',
};

function hasPermission(requiredRole, actualRole) {
    const roleWeights = {
        [roles.Employee]: 1,
        [roles.HR]: 2,
        [roles.admin]: 3,
    };
    const requiredRoleWeight = roleWeights[requiredRole];
    const actualRoleWeight = roleWeights[actualRole];
    return (actualRoleWeight >= requiredRoleWeight); 
}

function authorize(role = roles.Employee) {
    return async(req, res, next) => {
        const requiredRole = role;
        const token = (req.headers.authorization || req.headers.Authorization || '').split('Bearer ').pop();
        /*
         * If Token Not Exist Unauthorized Error;
         */
        if (!token) {
            const error = new Error('Token Not Exist');
            error.status = 407;
            return next(error);
        }
        try {
            const decodedData = await TokenServ.verify(token);
            req.tokenData = decodedData;
            const actualRole = decodedData.role;
            if (!hasPermission(requiredRole, actualRole)) {
                const error = new Error('You don\'t have permission to Proceed!');
                error.status = 401;
                return next(error);
            }
            next();
        } catch (error) {
            next(error);
        }
    };
}

function checkAuthorize() {
    return async (req, res, next) => {
        const token = (req.headers.authorization || req.headers.Authorization || '').split('Bearer ').pop();
        /*
         * If Token Not Exist Unauthorized Error;
         */
        if (!token) {
            const error = new Error('Token Not Exist');
            error.status = 401;
            return next(error);
        }
        try {
            const decodedData = await TokenServ.verify(token);
            req.tokenData = decodedData;
            next();
        } catch (error) {
            next(error);
        }
    };
}

module.exports = {
    authorize,
    hasPermission,
    checkAuthorize,
    roles
};


