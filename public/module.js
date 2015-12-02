"use strict";

let amazing = angular.module("amazing", ["ui.router", "satellizer"]);

amazing.config(function($stateProvider, $urlRouterProvider, $authProvider){
	$urlRouterProvider.otherwise("/login");

	$stateProvider

		.state("login", {url:"/login", templateUrl: "login/login.html", controller: "loginCtrl"})

		$authProvider.github({clientId:"f246865b2b188a2883dd"})
		$authProvider.facebook({clientId:"929091663845707"})
})

