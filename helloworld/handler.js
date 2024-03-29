'use strict';

module.exports.hello = (event, context, callback) => {

    const response =  {
      statusCode: 200,
      body: JSON.stringify(
      {
        message: `Hola Mundo! ${event.queryStringParameters.name}`,
        input: event,
      }),
  };
  callback(null, response);
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
