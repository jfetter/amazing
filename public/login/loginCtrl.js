"use strict";


angular.module("amazing")
	.controller("loginCtrl", function($scope, $auth, $state, $firebaseObject){
		var ref = new Firebase('https://amazing-mazes.firebaseio.com/');
		$scope.data = $firebaseObject(ref);
		
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