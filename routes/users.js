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

// router.get('/:_id', function(req, res){
//   User.findbyId(req.params._id, function(err, user){
//     res.status(err? 400 : 200).send(err || user);
//   });
// });

module.exports = router;
