/* Required for CORS */
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
};

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

module.exports.email = (event, context, callback) => {
  callback(null, {
    headers,
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        SENDGRID_API_KEY
      },
      null,
      2
    )
  });
};
