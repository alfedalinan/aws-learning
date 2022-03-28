'use strict';
const authorizeContoller = require('./src/application/controllers/authorize-controller');

module.exports.authorizer = async (event, context, callback) => {
  
  var request = null;
  var response = null;
  var body = null;

  try {
    request = {
      body: {
        token: event["authorizationToken"]
      }
    };

    response =  await authorizeContoller.execute(request);
    
    callback(null, {
      "principalId": response.data['principalId'],
      "policyDocument": response.data['PolicyDocument'],
      "context": response.data["context"]
    });
  }
  catch (error) {
    callback("Unauthorized");
  }

  return {
    statusCode: response.status,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type,Authorization,authorizationToken",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify({
      "principalId": response.data['principalId'],
      "policyDocument": response.data['PolicyDocument'],
      "context": response.data["context"]
    }),
  };
};
