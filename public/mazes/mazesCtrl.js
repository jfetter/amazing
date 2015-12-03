'use strict';

angular.module('amazing')
.controller('mazesCtrl', function($scope, $auth, $state, $http, $firebaseObject, service){
  var ref = new Firebase('https://amazing-mazes.firebaseio.com/');
  var usersRef = ref.child("users");

  $scope.startPosition = 1;

  $scope.data = $firebaseObject(ref);
  var syncObject = $firebaseObject(ref);
  syncObject.$bindTo($scope, "data");

  $http.get('/users')
  .then(function(res){
    $scope.users = res.data;
    console.log("SCOPE.USERS", $scope.users);

    console.log("PLAYERS", service.players)
    $scope.players = service.players;

  var ref = new Firebase('https://amazing-mazes.firebaseio.com/');
  var usersRef = ref.child("users");

  $scope.startPosition = 1;

  $scope.data = $firebaseObject(ref);
  var syncObject = $firebaseObject(ref);
  syncObject.$bindTo($scope, "data");

     usersRef.push({
        player: $scope.players
        // response: res.data
        // displayName: displayName,
        // picture: picture

     });


  }, function(err){
    console.error(err);
  });



});