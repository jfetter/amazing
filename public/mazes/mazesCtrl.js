'use strict';

angular.module('amazing')
.controller('mazesCtrl', function($scope, $auth, $state, $http){
  $scope.isAuthenticated = function(){
    $auth.isAuthenticated()
  }
  $scope.logout = function(){
    $auth.logout()
    $state.go('login')
  }
  $http.get('/users')
  .then(function(res){
    $scope.users = res.data;
    console.log($scope.users);
  }, function(err){
    console.error(err);
  });
});