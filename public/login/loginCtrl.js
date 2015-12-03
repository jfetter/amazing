"use strict";



angular.module("amazing")
.controller("loginCtrl", function($scope, $auth, $state, service){

	$scope.isAuthenticated = function(){
		return $auth.isAuthenticated();
	};
	$scope.authenticate = function(provider){
		$auth.authenticate(provider)
		.then(function(res){
			console.log("LOGIN CTRL RES", res);

			service.addNewUser(res);

			// $state.go('mazes')
		})
		.catch(function(error){
			console.error(error)
		})
	}


});