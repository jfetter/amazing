"use strict";

angular.module("amazing")
	.controller("loginCtrl", function($scope, $auth, $state){
		$scope.isAuthenticated=function(){
			return $auth.isAuthenticated();
		};
		$scope.authenticate= function(provider){
			$auth.authenticate(provider)
			.then(function(res){
				console.log("RESPONSE", res)
				$state.go('mazes')
			})
			.catch(function(error){
				console.error(error)
			})
		}
	});