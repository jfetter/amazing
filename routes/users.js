'use strict';

var express = require('express');
var router = express.Router();

// var ensureAuthenticated = require('../config/ensureAuthenticated');
var User = require('../models/user');

router.get('/', function(req, res) {
  User.getAllUsers(function(err, users){
    res.status(err? 400 : 200).send(err || users);
  });
});

module.exports = router;
