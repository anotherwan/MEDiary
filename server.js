"use strict"

const PORT             = process.env.PORT || 4000;
const ENV              = process.env.ENV || 'development';
const webpack          = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
//const config           = require('./webpack.config');
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
//const inputRoutes = require("./routes/inputs");

app.use("/api/users", userRoutes(knex));
//app.use("/api/inputs," inputRoutes(knex));

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

app.post("/register", (req, res) => {

  function getDrId() {
    return knex('doctors')
      .select('id')
      .where('name', 'like', 'D%');
  }
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
          req.session.user_id = userID
          res.json({
            success: true,
            mesage: 'OK'
          })
        })
      } else if (req.body.email === "" || req.body.password === "") {
          res.status(400).send("E-mail and/or Password was left blank.")
      } else if (user.email === userEmail) {
          res.status(400).send("E-mail is currently in use.")
      }
  });
})



app.post("/login", (req, res) => {
  let userLoginEmail = req.body.email;
  let userLoginPassword = req.body.password;
  knex.select('*')
    .from('users')
    .where('users.email', userLoginEmail)
    .then((results) => {
    let user = results[0];
      if(!user) {
        res.status(403).send("User not found.")
        console.log("User not found")
      } else if (userLoginEmail === user.email) {
        // if (bcrypt.compareSync(userLoginPassword) !== user.password) {
        //   res.status(401).send("Not the right password.")
        //   console.log("Pass no match")
        // }
        res.session = user.id;
        console.log(req.session)
      }

  })
})