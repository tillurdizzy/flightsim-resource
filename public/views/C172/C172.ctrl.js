'use strict';

C172MOD.controller('C172Ctrl',['$state','ListSrvcC172',function ($state,ListSrvcC172) {
	
	var ME = this;
	ME.tabView =  "overview";
	var SRVC = ListSrvcC172;
	
	ME.tutorial_dp = [
		{label:"Power Up", id:"pu"},
		{label:"Engine Start", id:"start"},
		{label:"Pushback", id:"pb"},
		{label:"Taxi", id:"taxi"},
		{label:"Takeoff", id:"to"},
		{label:"Visual Approach", id:"vis"},
		{label:"ILS", id:"ils"}
	];
	ME.tutorialSelected = ME.tutorial_dp[0];

	ME.stats = [
		{item:"",data:""}];

	ME.speeds = [
		{item:"",data:"KIAS"}];


	ME.checklist_dp = [
		{label:"Before Start",list:SRVC.prestart},
		{label:"Engine Start",list:SRVC.engineStart},
		{label:"Pushback",list:SRVC.pushback},
		{label:"Taxi",list:SRVC.taxi},
		{label:"Takeoff",list:SRVC.takeoff},
		{label:"Climb",list:SRVC.climb},
		{label:"Cruise",list:SRVC.cruise},
		{label:"Descent",list:SRVC.descent},
		{label:"Visual Approach",list:SRVC.visualApproach},
		{label:"ILS Approach",list:SRVC.ils}
	];


	ME.checklistSelected = ME.checklist_dp[0];
	ME.checklistDisplayed = ME.checklistSelected.list;

	ME.selectChecklist = function(){
		ME.checklistDisplayed = ME.checklistSelected.list;
	};

	ME.goNav = function(st){
		ME.tabView = st;
		switch(st){
			case"overview":$state.transitionTo("C172SP.overview");break;
			case"specs":$state.transitionTo("C172SP.specs");break;
			case"tutorial":$state.transitionTo("C172SP.tutorial");break;
			case"checklists":$state.transitionTo("C172SP.checklists");break;
			case"video":$state.transitionTo("C172SP.video");break;
		}
	};


 }]);