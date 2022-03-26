const jwt = require('jsonwebtoken');
const configs = require('../../framework/configs/constants');

const authorizeUseCase = {
    execute: async (token) => {
        var payload = jwt.verify(token, configs.secrets.app, { complete: true }).payload;
    
        return {
            "principalId": jwt.sign(Date.now().toString(), 'principalId'),
            "PolicyDocument": {
                "Version": configs.document.version,
                "Statement": [{
                    "Action": configs.document.action,
                    "Effect": "Allow",
                    "Resource": configs.server.arn
                }]
            },
            context: {
                "stringKey": JSON.stringify({ email: payload.email, access: payload.access }),
                "numberKey": "1",
                "booleanKey": "true"
            }
        }
    }
}

module.exports = authorizeUseCase