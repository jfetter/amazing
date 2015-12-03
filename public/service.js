'use strict';

angular.module('amazing')

.service('service', function($http, $firebaseObject){
  var players = {};
  var player = {};

  var ref = new Firebase('https://amazing-mazes.firebaseio.com/');
  var usersRef = ref.child("users");

  $scope.startPosition = 1;

  $scope.data = $firebaseObject(ref);
  var syncObject = $firebaseObject(ref);
  syncObject.$bindTo($scope, "data");

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

