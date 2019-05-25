const emailService = require('./emailService');

/* Required for CORS */
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
};

module.exports.email = async (event, context, callback) => {
  try {
    const { name, email, message } = JSON.parse(event.body);
    await emailService.sendContactEmail(name, email, message);

    return callback(null, {
      headers,
      statusCode: 200,
      body: ''
    });
  } catch (e) {
    console.log(e);
    return callback(null, {
      headers,
      statusCode: 500
    });
  }
};
