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



const userRoutes = require("./routes/users");

app.use("/api/users", userRoutes(knex));

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
    .where('name', 'like', 'D%');
}

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
          height: req.body.height
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
})
