'use strict';
var C172MOD = angular.module('C172MOD', ['ui.router','ngYoutubeEmbed']);

C172MOD.config(function($stateProvider, $urlRouterProvider) {
  	
	$stateProvider
		
		.state('C172SP.overview', {
			url: "/overview",
			templateUrl:"views/C172/overview.html"
		})

		.state('C172SP.specs', {
			url: "/specs",
			templateUrl:"views/C172/specs.html"
		})
		.state('C172SP.tutorial', {
			url: "/tutorial",
			templateUrl:"views/C172/tutorial.html"
		})

		.state('C172SP.checklists', {
			url: "/checklists",
			templateUrl:"views/C172/checklists.html"
		})

		.state('C172SP.video', {
			url: "/video",
			templateUrl:"views/C172/video.html"
		})

	
});	



