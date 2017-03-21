"use strict"

const PORT             = process.env.PORT || 4000;
const ENV              = process.env.ENV || 'development';
const webpack          = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const express          = require("express");
const app              = express();
const knexConfig       = require("./knexfile");
const knex             = require("knex")(knexConfig[ENV]);
const knexLogger       = require('knex-logger');
const bodyParser       = require("body-parser");
const cookieSession    = require("cookie-session");
const bcrypt           = require('bcrypt');
const path             = require('path');
const cors             = require('cors');
const nodemailer       = require('nodemailer');
const csv              = require('to-csv');

app.use(cors());
app.use(knexLogger(knex));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieSession({
  name: "session",
  keys: ["secretkeysinhere"],
  maxAge: 24 * 60 * 60 * 1000
}));

app.listen(4000, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Running at http://0.0.0.0:4000');
})

function generateRandomID() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(var i=0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

function getDrId() {
  return knex('doctors')
    .select('id')
    .where('name', 'like', 'James%');
}

function getUserId(email) {
  return knex('users')
    .select('id')
    .where('email', '=', email);
}

app.get('/profile/:user', (req, res) => {
  let email = req.params.user;

  knex('users')
    .select('name', 'email', 'age', 'gender', 'weight', 'height_feet', 'height_inches', 'allergies', 'medication', 'conditions')
    .where('email', '=', email)
    .then((response) => {
      res.json({
        data: response
      });
    })
})

app.get('/logs/:user', (req, res)=> {
  let email = req.params.user;

  knex('inputs')
    .select('inputs.date_created', 'inputs.body_part_id', 'inputs.description', 'inputs.title', 'inputs.pain_rating')
    .join('users', 'inputs.user_id', 'users.id')
    .where('users.email', '=', email)
    .then((response) => {
      res.json({
        data: response
      });
    })
})

app.get('/dashboard/:user', (req, res)=> {
  let email = req.params.user;

  knex('inputs')
    .select('inputs.date_created', 'inputs.body_part_id', 'inputs.description', 'inputs.title', 'inputs.pain_rating')
    .join('users', 'inputs.user_id', 'users.id')
    .where('users.email', '=', email)
    .then((response) => {
      res.json({
        data: response
      });
    })
})

app.post('/email', (req, res) => {
  let user          = req.body.user;
  let age           = req.body.age;
  let height_feet   = req.body.height_feet;
  let height_inches = req.body.height_inches;
  let weight        = req.body.weight;
  let gender        = req.body.gender;
  let allergies     = req.body.allergies;
  let medication    = req.body.medication;
  let conditions    = req.body.conditions;
  let pain          = req.body.painItems;



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
    subject: 'Re:  Patient ' + user, //subject line
    text: 'Name: ' + user +
          '\nAge: ' + age +
          '\nHeight: ' + height_feet + '", ' + height_inches +'\'' +
          '\nWeight: ' + weight +
          '\nGender: ' + gender +
          '\nAllergies: ' + allergies +
          '\nMedication: ' + medication +
          '\nCurrent Medical Conditions: ' + conditions +
          '\n\nPlease find their health report is attached.  Please note that pain rating in the report is on a scale from 1 to 5, where 1 is least painful and 5 is most painful.', //plain text body
    attachments: [
      {
        filename: 'patient-stats.csv',
        content: csv(pain)
      }
    ],
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
      res.json({
        message:  'Error sending health report'
      })
      return console.log(error);
    } else {
      res.json({
        message: 'You health report has been successfully sent to Dr. James Moriarty!'
      })
      return console.log('Message %s sent: %s', info.messageId, info.response);
    }
    transporter.close();
  })
})

app.post("/register", (req, res) => {

  let userExists = false;
  let userPassword = bcrypt.hashSync(req.body.password, 10);
  let userID = generateRandomID();
  let userEmail = req.body.email;

  knex('users')
    .select('email')
    .where('email', '=', userEmail)
    .then((response) => {
      let user = response[0];
      if (!user) {
        req.session.user_id = userID;
        knex('users').insert({
          doctor_id: getDrId(),
          name: req.body.name,
          email: req.body.email,
          password: userPassword,
          age: req.body.age,
          gender: req.body.gender,
          weight: req.body.weight,
          height_feet: req.body.heightFeet,
          height_inches: req.body.heightInches,
          allergies: req.body.allergies,
          medication: req.body.medication,
          conditions: req.body.conditions
        }).then((results) => {
          if (results.rowCount === 1) {
            res.json({
              message: userEmail
            })
          } else {
            res.json({
              message: 'Error creating user'
            })
          }
        })
      } else if (req.body.email === "" || req.body.password === "") {
          res.json({
            message: 'Email and/or password is empty'
          })
      } else if (user.email === userEmail) {
          res.json({
            message: 'Invalid email address'
          })
      }
  });
})

app.post("/login", (req, res) => {

  let userLoginEmail = req.body.email;
  let userLoginPassword = req.body.password;

  knex('users')
    .select('password')
    .where('email', '=', userLoginEmail)
    .then((results) => {
      let user = results[0];
      console.log(user);
      if(!user) {
        res.json({
          message: 'User not found'
        })
      } else if (!userLoginEmail || !userLoginPassword) {
        res.json({
          message: 'Email and/or password cannot be empty'
        })

      } else if ((bcrypt.compareSync(userLoginPassword, user.password))) {
        res.json({
          message: userLoginEmail
        })
      } else {
        res.json({
          message: 'Invalid email and/or password'
        })
      }
  });
})

app.post('/tracker', (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let rating = req.body.rating;
  let id = req.body.part
  let email = req.body.user

  console.log(title, description, rating, id, email);

  knex('inputs').insert({
    user_id: getUserId(email),
    body_part_id: id,
    pain_rating: rating,
    title: title,
    description: description
  }).then((results) => {
    if (results.rowCount === 1) {
      res.json({
        message: 'Input created'
      })
    } else {
      res.json({
        message: 'Error storing input'
      })
    }
  })
})
