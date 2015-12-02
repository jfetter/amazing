'use strict';

angular.module('amazing')
.controller('mazesCtrl', function($scope, $auth, $state){
  $scope.isAuthenticated = function(){
    $auth.isAuthenticated()
  }
  $scope.logout = function(){
    $auth.logout()
    $state.go('login')
  }
});