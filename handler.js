const sgMail = require('@sendgrid/mail');

/* Required for CORS */
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
};

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'marmelada@mailinator.com',
  from: 'test@example.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>'
};

module.exports.email = (event, context, callback) => {
  sgMail.send(msg);

  callback(null, {
    headers,
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!'
      },
      null,
      2
    )
  });
};
