'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jwt = require('jwt-simple');
var moment = require('moment');

var User;

var userSchema = Schema({
  displayName: String,
  picture: String,
  github: String,
  facebook: String
});

userSchema.methods.createJWT = function() {

  var payload = {
    sub: this._id,
    iat: moment().unix(),
    exp: moment().add(1, 'days').unix()
  };
  return jwt.encode(payload, process.env.JWT_SECRET);
};

userSchema.statics.getAllUsers = function(cb) {
  User.find( {}, function(err, users) {
    if(err || !users) return cb(err || 'No users found.');
    cb(err, users);
  });
};

User = mongoose.model('User', userSchema);
module.exports = User;