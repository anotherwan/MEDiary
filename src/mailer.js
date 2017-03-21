'use strict'

const nodemailer = require('nodemailer');

//reusable transport object using default SMTP
let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    clientId: '722643770328-oma1i5rs7gj5pbnml40d04ntikf2lb25.apps.googleusercontent.com',
    clientSecret: 'XkRIYAR7si3sowT-ZfjmIdyc'
  }
});

//setup email data with unicode symbols
let mailOptions = {
  from: '"MEDiary App" <mediaryskp@gmail.com>', //sender address, doesn't exist in this case.
  to: 'james.moriarty.mediary@gmail.com', //receiver address
  subject: 'from your patient', //subject line
  text: 'Jacen Solo is kinda sick!', //plain text body
  auth: {
    user: 'mediaryskp@gmail.com',
    refreshToken: '1/Hn8Svr7wz9tAil30wR7GVl46Fevu69GDzri7lj-rNw8',
    accessToken: 'ya29.GlsSBNmWjA3MoR2LdVKt59D-9NOWv7Y5spimwVgV8czkQcMSBS8XbRACnc5IxYOovFkjNJgH2tzCMQjrWvrEAktQqOtIXoV-cYkl1ESa0oUJ154l-L8bHKELaNkH',
    expires: 3600
  }
};

//send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  } else {
    console.log('Message %s sent: %s', info.messageId, info.response);
  }
  transporter.close();
})