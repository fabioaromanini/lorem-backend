const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const contactEmail = process.env.CONTACT_EMAIL;

module.exports = {
  sendContactEmail: (name, email, message) => {
    const htmlBody = `
    <div>
        <h1>Name: ${name}</h1>
        <h1>Email: ${email}</h1>
        <h1>Message</h1>
        <p>${message}</p>
    </div>
    `;

    const textBody = `
    Name: ${name}
    Email: ${email}
    Message: ${message}
    `;

    return sgMail.send({
      to: contactEmail,
      from: 'contact@lorem.fabioaromanini.com',
      subject: 'Lorem Contact Service - New message',
      html: htmlBody,
      text: textBody
    });
  }
};
