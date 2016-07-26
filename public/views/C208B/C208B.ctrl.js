'use strict';

app.controller('C208Ctrl',['$state','ListSrvc208B',function ($state,ListSrvc208B) {
	
	var ME = this;
	ME.tabView =  "overview";
	var SRVC = ListSrvc208B;
	
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
		{item:"Type",data:"T/208/G"},
		{item:"Pax Capacity",data:"14"},
		{item:"Empty Weight",data:"4,965 lbs / 2,250 kg"},
		{item:"Max Takeoff Weight",data:"8,750 lbs / 3,970 kg"},
		{item:"Max Landing Weight",data:"8,500 lbs"},
		{item:"Max Cruise Speed",data:"182 kt / 337 km/h"},
		{item:"Wing Span",data:"15.88 m"},
		{item:"Length",data:"12.67 m"},
		{item:"Height",data:"4.32 m"},
		{item:"Max Fuel Capacity",data:"355 USg / 1,258 liters"},
		{item:"Max Range",data:"900 nm / 1667 km"},
		{item:"Takeoff Run at MTOW",data:"1,365 ft"},
		{item:"Rate of Climb",data:"1000 fpm"},
		{item:"Landing Distance",data:"950 ft"},
		{item:"Ceiling",data:"23,700 ft"},
		{item:"Endurance at 75% power",data:"5 hrs."}];

	ME.speeds = [
		{item:"Max Operating Speed (VMO)",data:"175 KIAS"},
		{item:"Never Exceed Speed",data:"175 KIAS"},
		{item:"Manuevering Speed (8,750 lbs)",data:"148 KIAS"},
		{item:"Manuevering Speed (7,500 lbs)",data:"137 KIAS"},
		{item:"Manuevering Speed (6,250 lbs)",data:"112 KIAS"},
		{item:"Max Structural Cruising Speed",data:"140 KIAS"},
		{item:"Rotation (VR)",data:"70 KIAS"},
		{item:"Best Angle-of-Climb",data:"72 KIAS"},
		{item:"Best Rate-of-Climb",data:"104 KIAS"},
		{item:"Normal Climb",data:"110-120 KIAS"},
		{item:"Stall Speed in Landing Config",data:"61 KIAS"},
		{item:"Flaps Limit 20°-Full",data:"125 KIAS"},
		{item:"Flaps Limit 10°-20°",data:"125 KIAS"},
		{item:"Flaps Limit < 10°",data:"184 KIAS"}];


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
			case"overview":$state.transitionTo("C208B.overview");break;
			case"specs":$state.transitionTo("C208B.specs");break;
			case"tutorial":$state.transitionTo("C208B.tutorial");break;
			case"checklists":$state.transitionTo("C208B.checklists");break;
			case"video":$state.transitionTo("C208B.video");break;
		}
	};


 }]);