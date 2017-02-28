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


// new WebpackDevServer(webpack(config), {
//     publicPath: config.output.publicPath,
//     watchOptions: {
//       aggregateTimeout: 300,
//       poll: 1000
//     }
//   })
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
  console.log(req.body);
  let userExists = false;
  let userPassword = bcrypt.hashSync(req.body.password, 10);
  let userID = generateRandomID();
  let userEmail = req.body.email;


  function getDrId() {
    return knex('doctors')
      .select('id')
      .where('name', 'like', 'D%');
  }

  // run a code that will loop through the database (check for email)
  // if there is an user there change userExists = true
  // so the same user cant register with the same e-mail

   function emailExists(data) {
    return knex('users')
      .select('email')
      .where('email', '=', data);
  }



  if (userExists) {
    res.status(400).send("E-mail is currently in use.")
  } else if (req.body.email === "" || req.body.password === "") {
    res.status(400).send("E-mail and/or Password was left blank.")
  } else {
    req.session.user_id = userID
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
      res.json({
        success: true,
        mesage: 'OK'
      })
    })
  }
})

// app.post("/register", (req, res) => {
//   let userExists = false;
//   let userPassword = bcrypt.hashSync(req.body.password, 10);
//   let userID = generateRandomID();

//   // run a code that will loop through the database (check for email)
//   // if there is an user there change userExists = true
//   // so the same user cant register with the same e-mail

//   if (userExists) {
//     res.status(400).send("E-mail already in use.")
//   } else if (req.body.email === "" || req.body.password === "") {
//     res.status(400).send("E-mail and/or Password was left blank.")
//   } else {
//     req.session.user_id = userID
//       const newUser = {
//         id: userID,
//         email: req.body.email,
//         password: userPassword,
//       }
//   }
//   res.redirect("/user")
// })


// app.get("/login", (req, res) => {

// })

// app.post("/login", (req, res) => {
//   let userLoginEmail === req.body.email;
//   let userLoginPassword === req.body.password;

// //fix below!
//   for (loop through the database to find user information) {
//     if('database name'[userID].email === userLoginEmail) {
//       if(bcrypt.compareSync(userLoginPassword, 'database name'[userID].password)) {
//         req.session.user_id = 'database name'[userID].id
//         res.redirect("/")
//         return
//       } else {
//         res.status(400).send("E-mail and Password do not match.")
//       }
//     }
//   }
//     return res.status(403).send("User not found")
// });



// app.get("/user", (req, res) => {
//   if (req.session.user_id === undefined) {
//   res.status(401).send(`Error: User not logged in <br> <br> <a href="/login"> Link to Login </a>`)
//   }
// })