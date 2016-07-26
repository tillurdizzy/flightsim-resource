'use strict';

app.controller('EMB110Ctrl',['$state',function ($state) {
	
	var ME = this;
	ME.tabView =  "overview";
	ME.videoLink = "https://youtu.be/Z-ARL_8nkxw";
	

	ME.stats = [
		{item:"Pax Capacity",data:"18"},
		{item:"Max Fuel Capacity",data:"454 US Gal / xxx liters"},
		{item:"WEIGHTS"},
		{item:"Empty Weight",data:"7,480 lbs / 3,393 kg"},
		{item:"Max Ramp Weight",data:"12,566 lbs / 5,700 kg"},
		{item:"Max Takeoff Weight",data:"12,500 lbs / 5,900 kg"},
		{item:"Max Landing Weight",data:"12,500 lbs / 5,670 kg"},
		{item:"DIMENSIONS"},
		{item:"Wing Span",data:"50.26 ft / 15.32 m"},
		{item:"Length",data:"47.87 ft / 14.59 m"},
		{item:"Height",data:"16.54 ft / 5.04 m"},
		{item:"PERFORMANCE"},
		{item:"Max Range",data:"1080 nm / 2000 km"},
		{item:"Takeoff Run at MTOW",data:"1,230 ft / 375 m"},
		{item:"Initial Rate of Climb",data:"1788 fpm"},
		{item:"Landing Distance",data:"1,410 ft / 430 m"},
		{item:"Ceiling",data:"22,500 ft"}];

	ME.speeds = [
		{item:"Cruise Speed",data:"208 KIAS"},
		{item:"Never Exceed Speed",data:"248 KIAS"},
		{item:"Rotation (V1/Vr)",data:"100 KIAS"},
		{item:"V2",data:"108 KIAS"},
		{item:"Best Angle-of-Climb",data:"72 KIAS"},
		{item:"Best Rate-of-Climb",data:"104 KIAS"},
		{item:"Normal Climb",data:"110-120 KIAS"}];

	ME.rateOfClimb = [
		{item:"12500",data:"127 KIAS"},
		{item:"12000",data:"125 KIAS"},
		{item:"11000",data:"119 KIAS"},
		{item:"10000",data:"114 KIAS"},
		{item:"9000",data:"108 KIAS"},
		{item:"8000",data:"102 KIAS"},
		{item:"7000",data:"96 KIAS"}];

	ME.angleOfClimb = [
		{item:"12500",data:"100 KIAS"},
		{item:"12000",data:"97 KIAS"},
		{item:"11000",data:"94 KIAS"},
		{item:"10000",data:"89 KIAS"},
		{item:"9000",data:"85 KIAS"},
		{item:"8000",data:"80 KIAS"},
		{item:"7000",data:"75 KIAS"}];

	ME.approach = [
		{item:"12500",data:"94 KIAS"},
		{item:"12000",data:"92 KIAS"},
		{item:"11000",data:"88 KIAS"},
		{item:"10000",data:"84 KIAS"},
		{item:"9000",data:"84 KIAS"},
		{item:"8000",data:"84 KIAS"},
		{item:"7000",data:"84 KIAS"}];

	var beforeStart = [
		{item:"Exterior inspection",data:"COMPLETE",priority:"low"},
		{item:"Initial Inspection",data:"COMPLETE",priority:"low"},
		{item:"Cabin and cockpit inspection",data:"COMPLETE",priority:"low"},
		{item:"Wheel chocks and tail support",data:"REMOVED AND STOWED",priority:"high"},
		{item:"Doors",data:"CLOSED",priority:"low"},
		{item:"Seat, pedals and seatbelt",data:"ADJUSTED",priority:"low"},
		{item:"Parking brake",data:"SET",priority:"high"},
		{item:"Battery master switch",data:"BATTERY OR EXTERNAL POWER",priority:"high"},
		{item:"Anti-collision light",data:"ROTATING",priority:"high"},
		{item:"Inverters 2 and 1",data:"ON",priority:"high"},
		{item:"Totalizer",data:"SET",priority:"low"},
		{item:"Fuel pumps:",data:"",priority:"none"},
		{item:"-- Auxiliary",data:"ON/OBSERVE PRESSURE/AUTO",priority:"low"},
		{item:"-- Main",data:"ON",priority:"high"},
		{item:"Hydraulic booster pump",data:"ON",priority:"low"},
		{item:"Radios",data:"OFF",priority:"low"}
	];

	var engineStart = [
		{item:"Fuel condition lever",data:"LO IDLE (after 12% Ng)",priority:"high"},
		{item:"Starter switch",data:"START",priority:"high"},
		{item:"WAIT - When ignition indicator is:",data:"OFF",priority:"high"},
		{item:"Starter switch",data:"OFF",priority:"high"},
		{item:"Gen",data:"ON",priority:"high"},
		{item:"Oil pressure",data:"CHECKED: 40 PSI MIN",priority:"low"},
		{item:"Hydraulic pressure",data:"CHECKED",priority:"low"},
		{item:"Fuel condition lever",data:"AS REQUIRED",priority:"low"}
	];

	var afterStart = [
		{item:"Engine start",data:"COMPLETE",priority:"low"},
		{item:"Battery master",data:"BATTERY",priority:"low"},
		{item:"Generators",data:"ON",priority:"high"},
		{item:"Voltammeters",data:"CHECKED",priority:"low"},
		{item:"Static/Pitot heat",data:"AS REQUIRED",priority:"high"},
		{item:"Px heat",data:"AS REQUIRED",priority:"low"},
		{item:"Battery temperature monitor",data:"TEST",priority:"low"},
		{item:"Gyro and lighting emergency supply",data:"ARMED",priority:"low"},
		{item:"Avionics",data:"ON/STBY",priority:"high"},
		{item:"Autopilot Master",data:"ON",priority:"high"},
		{item:"Radar (if installed)",data:"STBY",priority:"low"},
		{item:"Transponder (if installed)",data:"STBY",priority:"low"},
		{item:"Air conditioning",data:"AS REQUIRED",priority:"low"},
		{item:"FLIGHT PLAN"},
		{item:"Set NAV Radios, OR",data:"SET",priority:"high"},
		{item:"Import Plan/Set GPS",data:"SET",priority:"high"}
	];

	var taxi = [
		{item:"Parking brake",data:"RELEASE",priority:"high"},
		{item:"Brakes",data:"TEST",priority:"low"},
		{item:"Flight instruments",data:"CHECKED",priority:"low"},
		{item:"Beta lights",data:"CHECKED",priority:"low"},
		{item:"Radar (if installed)",data:"CHECKED/STBY",priority:"low"},
		{item:"Cross-feed",data:"CHECKED/OFF",priority:"low"},
		{item:"Fuel pumps",data:"CHECKED/SET",priority:"low"},
		{item:"Propeller levers",data:"MOVE TO FEATHER TWICE",priority:"high"},
		{item:"Autopilot (if installed)",data:"TEST/OFF",priority:"low"},
		{item:"Electric trim (if installed)",data:"TEST",priority:"low"},
		{item:"Tim tabs",data:"CHECKED",priority:"low"}
	];

	var engine = [
		{item:"Parking brakes",data:"SET",priority:"low"},
		{item:"Secondary low pitch stop",data:"CHECKED",priority:"low"},
		{item:"Overspeed",data:"CHECKED",priority:"low"},
		{item:"Auto feather",data:"CHECKED",priority:"low"},
		{item:"Auto feather",data:"SET",priority:"high"}
	];

	var beforeTakeOff = [
		{item:"Utility lights",data:"ON (AT NIGHT)",priority:"low"},
		{item:"Inertial separation",data:"AS REQUIRED",priority:"low"},
		{item:"Flaps",data:"25%",priority:"high"},
		{item:"Flight controls",data:"CHECKED",priority:"low"},
		{item:"Trim tabs",data:"SET",priority:"low"},
		{item:"TO Data",data:"CHECKED",priority:"low"},
		{item:"Take-off briefing",data:"COMPLETE",priority:"low"},
		{item:"Flight instruments and radios",data:"SET FOR DEPARTURE",priority:"high"},
		{item:"Transponder",data:"ON",priority:"low"},
		{item:"Air conditioning",data:"OFF OR VENT",priority:"low"},
		{item:"Annunciator panel",data:"CHECKED",priority:"low"},
		{item:"Fuel condition levers",data:"HI IDLE",priority:"high"},
		{item:"Parking brake",data:"RELEASE",priority:"high"}
	];

	var afterTakeOff = [
		{item:"Landing gear",data:"UP",priority:"high"},
		{item:"Flaps",data:"UP",priority:"high"},
		{item:"Propeller levers",data:"91% Nh",priority:"high"},
		{item:"Power levers",data:"SET FOR CLIMB",priority:"high"},
		{item:"Air conditioning",data:"AS REQUIRED",priority:"low"},
		{item:"Landing, taxi and utility lights",data:"OFF",priority:"high"},
		{item:"Inertial separation",data:"AS REQUIRED",priority:"low"},
		{item:"Auto feather",data:"OFF",priority:"high"},
		{item:"Propeller synchro",data:"ON",priority:"high"},
		{item:"Hydraulic booster pump",data:"CHECKED",priority:"low"},
		{item:"Engine instruments",data:"CHECKED",priority:"low"},
		{item:"Cabin signs",data:"AS REQUIRED",priority:"low"},
		{item:"Oxygen valve",data:"AS REQUIRED",priority:"low"}
	];

	var autopilot = [
		{item:"Master AP (console switch)",data:"ON",priority:"high"},
		{item:"Straight and Level Flight",data:"CHECK",priority:"high"},
		{item:"Heading Bug",data:"Flight path",priority:"high"},
		{item:"CDI",data:"GPS (if used)",priority:"high"},
		{item:"Pitch Trim",data:"Centered",priority:"high"},
		{item:"AP HDG",data:"ON",priority:"high"},
		{item:"AP ALT",data:"ON",priority:"high"},
		{item:"Auto Pilot Engage",data:"ON",priority:"high"},
		{item:"Straight and Level Flight",data:"CHECK",priority:"high"},
	];

	var cruise = [
		{item:"Passenger heat",data:"AS REQUIRED",priority:"low"},
		{item:"Propeller levers",data:"83% Nh",priority:"high"},
		{item:"Power levers",data:"SET FOR CRUISE",priority:"high"},
		{item:"Cabin signs",data:"AS REQUIRED",priority:"low"},
		{item:"Autopilot",data:"AS REQUIRED",priority:"low"}
	];

	var initialApproach = [
		{item:"Descent procedures",data:"COMPLETE",priority:"low"},
		{item:"Cabin signs",data:"ON",priority:"low"},
		{item:"Utility lights",data:"ON (AT NIGHT)",priority:"low"},
		{item:"Cabin signs",data:"AS REQUIRED",priority:"low"},
		{item:"Oxygen valve",data:"CLOSED",priority:"low"},
		{item:"Passenger heat",data:"AS REQUIRED",priority:"low"},
		{item:"Landing lights",data:"ON",priority:"high"},
		{item:"Landing data",data:"CHECKED",priority:"high"},
		{item:"Approach briefing",data:"COMPLETE",priority:"low"}
	];

	var beforeLanding = [
		{item:"Altimeter",data:"SET, CROSS-CHECK",priority:"high"},
		{item:"Flaps",data:"25%",priority:"high"},
		{item:"Propeller synchro",data:"OFF",priority:"low"},
		{item:"Auto feather",data:"OFF",priority:"low"},
		{item:"Propeller levers",data:"91% Nh",priority:"high"},
		{item:"Hydraulic booster pump",data:"ON",priority:"low"},
		{item:"Hydraulic pressures",data:"low",priority:"low"},
		{item:"Landing gear",data:"DOWN",priority:"high"},
		{item:"Nose wheel steering",data:"ON",priority:"low"}
	];

	var final = [
		{item:"Flaps",data:"100%",priority:"high"},
		{item:"Inertial separation",data:"AS REQUIRED",priority:"low"},
		{item:"Air conditioning",data:"VENT/OFF",priority:"low"},
		{item:"Autopilot",data:"DISENGAGE AT DH",priority:"low"}
	];

	var afterLanding = [
		{item:"Strobe lights",data:"OFF",priority:"low"},
		{item:"Landing an taxi lights",data:"AS REQUIRED",priority:"low"},
		{item:"Inertial separation",data:"AS REQUIRED",priority:"low"},
		{item:"Auto feather",data:"OFF",priority:"low"},
		{item:"Radar",data:"OFF",priority:"low"},
		{item:"Transponder",data:"OFF",priority:"low"},
		{item:"Flaps",data:"UP / 0%",priority:"low"},
		{item:"Air conditioning",data:"AS REQUIRED",priority:"low"},
		{item:"Fuel condition levers",data:"AS REQUIRED",priority:"low"},
		{item:"Trim tabs",data:"SET",priority:"low"},
		{item:"Non-essential electric equipment",data:"OFF",priority:"low"},
		{item:"Engine shut down procedure",data:"PERFORM",priority:"low"}
	];

	ME.specTable_dp = [
		{label:"General Specifications",list:'stats'},
		{label:"Speed Performance",list:'speeds'},
		{label:"Best Rate of Climb",list:'rateOfClimb'},
		{label:"Best Angle of Climb",list:'angleOfClimb'},
		{label:"Approach Speeds",list:'approach'}
	];

	ME.specTableSelected = ME.specTable_dp[0];

	ME.checklist_dp = [
		{label:"Before Start",list:beforeStart},
		{label:"Engine Start",list:engineStart},
		{label:"After Start",list:afterStart},
		{label:"Taxi",list:taxi},
		{label:"Engine Run-up",list:engine},
		{label:"Before Takeoff",list:beforeTakeOff},
		{label:"After Takeoff / Climb",list:afterTakeOff},
		{label:"Autopilot",list:autopilot},
		{label:"Cruise",list:cruise},
		{label:"Initial Approach",list:initialApproach},
		{label:"Before Landing",list:beforeLanding},
		{label:"Final",list:final},
		{label:"After Landing",list:afterLanding}
	];

	ME.checklistSelected = ME.checklist_dp[0];
	ME.checklistDisplayed = ME.checklistSelected.list;
	ME.chkLstInstruct = {autopilot:false,engine:false,start:false};

	ME.selectChecklist = function(){
		var lbl = ME.checklistSelected.label;
		resetChkLstInstruct();
		switch(lbl){
			case "Autopilot":ME.chkLstInstruct.autopilot = true;break;
			case "Engine Start":ME.chkLstInstruct.start = true;break;
			case "Engine Run-up":ME.chkLstInstruct.engine = true;break;
		}
		
		ME.checklistDisplayed = ME.checklistSelected.list;
	};

	var resetChkLstInstruct = function(){
		ME.chkLstInstruct = {autopilot:false,engine:false,start:false};
	}

	
	ME.goNav = function(st){
		ME.tabView = st;
		switch(st){
			case"overview":$state.transitionTo("EMB110.overview");break;
			case"specs":$state.transitionTo("EMB110.specs");break;
			case"tutorial":$state.transitionTo("EMB110.tutorial");break;
			case"checklists":$state.transitionTo("EMB110.checklists");break;
			case"video":$state.transitionTo("EMB110.video");break;
		}
	};


 }]);