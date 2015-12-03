'use strict';

angular.module('amazing')
.controller('mazesCtrl', function($scope, $auth, $state, $http, $firebaseObject, service){
  var ref = new Firebase('https://amazing-mazes.firebaseio.com/');
  var usersRef = ref.child("users");

  $scope.data = $firebaseObject(ref);
  var syncObject = $firebaseObject(ref);
  syncObject.$bindTo($scope, "data");

  $http.get('/users')
  .then(function(res){
    $scope.users = res.data;
    console.log("SCOPE.USERS", $scope.users);

    console.log("PLAYER", service.player)
    $scope.player = service.player;

  var ref = new Firebase('https://amazing-mazes.firebaseio.com/');
  var usersRef = ref.child("users");

  $scope.data = $firebaseObject(ref);
  var syncObject = $firebaseObject(ref);
  syncObject.$bindTo($scope, "data");

     usersRef.push({
        player: $scope.player
        // response: res.data
        // displayName: displayName,
        // picture: picture
     });

     var $avatar = $("<img>")
     $avatar.attr("src", $scope.player.picture)

    $("#1").append($avatar)
    console.log($scope.player.picture, "PIC")

  }, function(err){
    console.error(err);
  });



});