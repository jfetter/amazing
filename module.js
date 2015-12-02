"use strict";

amazing = angular.module("amazing", ["ui.router"]);

amazing.config(function($stateProvider, $urlRouterProvider, $authProvider){
	$urlRouterProvider.otherwise("/");

	$stateProvider

		.state("login", {url:"/", templateUrl: "views/login.html", controller: "loginCtrl"})

})