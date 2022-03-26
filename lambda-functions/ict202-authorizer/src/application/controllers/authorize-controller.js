const core = require('../../core/constants');
const authorizeUseCase = require('../../application/use-case/authorize-use-case');

const authorizeController = {
    execute: async (request) => {
        try {
            var token = request.body.token;
    
            var result = null;

            if (typeof token != "undefined" && token.includes("Bearer")) {
                token = token.replace("Bearer ", "").trim();
                result = await authorizeUseCase.execute(token);
            }

            return {
                status: result != null ? core.status.OK : core.status.UNAUTHORIZED,
                message: result != null ? "Allowed" : "Deny",
                data: result
            }
            
        } catch (error) {
            
            return {
                status: core.status.INTERNAL_SERVER_ERROR,
                message: "Internal Server Error",
                data: JSON.stringify(error.message)
            }
        }
    }
}

module.exports = authorizeController