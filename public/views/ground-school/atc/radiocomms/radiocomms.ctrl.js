'use strict';
angular.module('MyApp').controller('RadComCtrl', myFunction);

myFunction.$inject = [];

function myFunction() { 
	var VM =this;

	VM.currentView = "1";
	
	VM.selectViews_dp = [
		{label:"1. Clearance Delivery",id:"1"},
		{label:"2. Ground - Push back",id:"2"},
		{label:"3. Ground - Taxi to runway",id:"3"},
		{label:"4. Tower - Taxi on to runway and take off clearance",id:"4"},
		{label:"5. Departure - Climb clearance and route changes",id:"5"},
		{label:"6. Control Center - Climb and cruise",id:"6"},
		{label:"7. Tower - Approach and landing",id:"7"},
		{label:"8. Ground - Taxi to gate",id:"8"},
		{label:"9. Common Phrases",id:"9"}
	];

	VM.viewSelected =VM.selectViews_dp[0];

	VM.selectView =function(){
		VM.currentView = VM.viewSelected.id;
	};



};