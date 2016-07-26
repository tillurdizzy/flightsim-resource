'use strict';
angular.module('airportMod', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        
    .state('ground.airport.lighting', {
        url: "/airport-lighting",
        templateUrl: "views/ground-school/airport/lighting.html"
    })

    .state('ground.airport.signage', {
        url: "/airport-signage",
        templateUrl: "views/ground-school/airport/signage.html"
    })

    .state('ground.airport.markings', {
        url: "/airport-markings",
        templateUrl: "views/ground-school/airport/markings.html"
    })

    .state('ground.airport.ils', {
        url: "/airport-ils",
        templateUrl: "views/ground-school/airport/ils.html"
    })

})

.controller('AirportCtrl',['$state',function ($state) {
    
    var Me = this;
    
    Me.goNav = function(st){
        $state.transitionTo(st);
    };


 }]);
