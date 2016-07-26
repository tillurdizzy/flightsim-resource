'use strict';

app.controller('NavCtrl',['$state',function ($state) {
	
	var ME = this;
	ME.submenu1 = "";
	ME.submenu2  = "";

	
	ME.goNav = function(st){
		$state.transitionTo(st);
		
		switch(st){
			case "home":
				ME.submenu1 = "";
				ME.submenu2 = "";
				break;
			case "aircraft":
				ME.submenu1 = "";
				ME.submenu2 = "";
				break;
			case "ground":
				ME.submenu1 = "ground";
				ME.submenu2 = "";
				break;
			case "ref":
				ME.submenu1 = "ref";
				ME.submenu2 = "";
				break;
		}

	};


 }]);