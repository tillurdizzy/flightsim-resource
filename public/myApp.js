'use strict';
var app = angular.module('MyApp', ['ui.router','ngDialog','ngYoutubeEmbed','C172MOD','airportMod']);

app.config(function($stateProvider, $urlRouterProvider) {
 	
 	$urlRouterProvider.otherwise("/home");
  	
	$stateProvider
		.state('home', {
			url: "/home",
			templateUrl:"views/home.html"
		})

		.state('ground', {
			url: "/ground-school",
			templateUrl:"views/ground-school/container.html"
		})

		.state('aircraft', {
			url: "/aircraft",
			templateUrl:"views/aircraft.html"
		})

		.state('ground.radiocomms', {
			url: "/radiocomms",
			templateUrl:"views/ground-school/atc/radiocomms/radiocomms.html"
		})

		.state('ground.aircraftLights', {
			url: "/aircraft-lights",
			templateUrl:"views/ground-school/aircraft-systems/lights/lights.html"
		})

		.state('ground.vatsim', {
			url: "/vatsim",
			templateUrl:"views/ground-school/atc/vatsim/vatsim.html"
		})

		.state('ground.navaids', {
			url: "/navaids",
			templateUrl:"views/ground-school/planning/aids/aids.html"
		})

		.state('ground.altitude', {
			url: "/altitude",
			templateUrl:"views/ground-school/planning/altitude/altitude.html"
		})

		.state('ground.approach', {
			url: "/approach",
			templateUrl:"views/ground-school/planning/approach/approach.html"
		})

		.state('ground.nat', {
			url: "/nat",
			templateUrl:"views/ground-school/planning/nat/nat.html"
		})

		.state('acronyms', {
			url: "/acronyms",
			templateUrl:"views/general-reference/acronyms/acronyms.html"
		})

		.state('alphabet', {
			url: "/alphabet",
			templateUrl:"views/general-reference/alphabet/alphabet.html"
		})

		.state('morsecode', {
			url: "/morsecode",
			templateUrl:"views/general-reference/morsecode/morsecode.html"
		})

		.state('unitconversion', {
			url: "/unitconversion",
			templateUrl:"views/general-reference/unitconversion/unitconversion.html"
		})

		.state('vspeeds', {
			url: "/vspeeds",
			templateUrl:"views/general-reference/vspeeds/vspeeds.html"
		})

		.state('ground.airport', {
			url: "/airport",
			templateUrl:"views/ground-school/airport/container.html"
		})

		.state('C172SP', {
			url: "/C172SP",
			templateUrl:"views/C172/container.html"
		})

		.state('C208B', {
			url: "/cessena-caravan",
			templateUrl:"views/C208B/container.html"
		})

		.state('C208B.overview', {
			url: "/overview",
			templateUrl:"views/C208B/overview.html"
		})

		.state('C208B.specs', {
			url: "/specs",
			templateUrl:"views/C208B/specs.html"
		})
		.state('C208B.tutorial', {
			url: "/tutorial",
			templateUrl:"views/C208B/tutorial.html"
		})

		.state('C208B.checklists', {
			url: "/checklists",
			templateUrl:"views/C208B/checklists.html"
		})

		.state('C208B.video', {
			url: "/video",
			templateUrl:"views/C208B/video.html"
		})

		.state('EMB110', {
			url: "/emb-110",
			templateUrl:"views/EMB110/container.html"
		})

		.state('EMB110.overview', {
			url: "/overview",
			templateUrl:"views/EMB110/overview.html"
		})

		.state('EMB110.specs', {
			url: "/specs",
			templateUrl:"views/EMB110/specs.html"
		})
		.state('EMB110.tutorial', {
			url: "/tutorial",
			templateUrl:"views/EMB110/tutorial.html"
		})

		.state('EMB110.checklists', {
			url: "/checklists",
			templateUrl:"views/EMB110/checklists.html"
		})

		.state('EMB110.video', {
			url: "/video",
			templateUrl:"views/EMB110/video.html"
		})
	
});	



