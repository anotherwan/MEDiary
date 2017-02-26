"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      .where({email: 'shuman@notarobot.com'})
      .then((results) => {
        res.json(results);
    });
  });

  router.post('/', (req, res) => {
    knex('users').insert({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
      gender: req.body.gender,
      weight: req.body.weight,
      height: req.body.height
    }).then((results) => {
      res.JSON({
        success: true,
        mesage: 'OK'
      })
    })
  });

  return router;
}