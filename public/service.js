'use strict';

angular.module('amazing')

.service('service', function($http, $firebaseObject){

  this.players = {};
  this.player = {};

  var players = this.players;
  var player = this.player; 
  
  this.addNewUser = function(res){
    var user = res.data.user;
    player = {
      _id: user._id,
      displayName: user.displayName,
      picture: user.picture,
      location: 1
    }
    players[player._id] = player;
    console.log("PLAYERS", players);

  }

})

