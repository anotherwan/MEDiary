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
const cors             = require('cors')

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

app.post('/profile', (req, res) => {
  let email = req.body.user;

  knex('inputs')
    .select('users.name', 'users.age', 'users.gender', 'users.weight', 'users.height_feet', 'users.height_inches', 'users.allergies', 'users.medication', 'users.conditions', 'inputs.description', 'inputs.date_created', 'inputs.body_part_id', 'inputs.pain_rating', 'inputs.title')
    .join('users', 'inputs.user_id', 'users.id')
    .where('users.email', '=', email)
    .then((response) => {
      res.json({
        data: response
      });
    })

  // knex('users')
  //   .select('name', 'age', 'gender', 'weight', 'height_feet', 'height_inches', 'allergies', 'medication', 'conditions')
  //   .where('email', '=', email)
  //   .then((response) => {
  //     res.json({
  //       data: response
  //     });
  //   })
})

app.post('/dashboard', (req, res)=> {
  let email = req.body.user;

  knex('inputs')
    .select('inputs.date_created', 'inputs.body_part_id')
    .join('users', 'inputs.user_id', 'users.id')
    .where('users.email', '=', email)
    .then((response) => {
      res.json({
        data: response
      });
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
