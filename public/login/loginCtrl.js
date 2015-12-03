"use strict";



angular.module("amazing")
.controller("loginCtrl", function($scope, $auth, $state, $firebaseObject){
	var ref = new Firebase('https://amazing-mazes.firebaseio.com/');

	$scope.startPosition = 1;

	// $scope.data = $firebaseObject(ref);
	var syncObject = $firebaseObject(ref);
	syncObject.$bindTo($scope, "data");

	$scope.isAuthenticated = function(){
		return $auth.isAuthenticated();
	};
	$scope.authenticate = function(provider){
		$auth.authenticate(provider)
		.then(function(res){
			console.log("RESPONSE", res)
			// var displayName = res[0].displayName;
			// var picture = res[0].picture;
			// console.log(displayName)

			// var usersRef = ref.child("users");
		 //  usersRef.push({
		 //    displayName: displayName,
		 //    picture: picture
		 //  });

			$state.go('mazes')
		})
		.catch(function(error){
			console.error(error)
		})
	}
});