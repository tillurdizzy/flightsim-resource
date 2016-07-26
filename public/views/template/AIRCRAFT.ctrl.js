'use strict';

app.controller('AIRCRAFTCtrl',['$state',function ($state) {
	
	var ME = this;
	ME.tabView =  "overview";

	ME.stats = [
		{item:"Type",data:"xxx"},
		{item:"xxxx",data:"xxx"}];

	ME.speeds = [
		{item:"xxx",data:"xxx KIAS"},
		{item:"xxx",data:"xxx KIAS"},
		{item:"xxx",data:"xxx KIAS"}];

	
	ME.goNav = function(st){
		ME.tabView = st;
		switch(st){
			case"overview":$state.transitionTo("AIRCRAFT.overview");break;
			case"specs":$state.transitionTo("AIRCRAFT.specs");break;
			case"tutorial":$state.transitionTo("AIRCRAFT.tutorial");break;
			case"checklists":$state.transitionTo("AIRCRAFT.checklists");break;
		}
	};


 }]);