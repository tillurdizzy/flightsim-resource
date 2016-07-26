'use strict';

app.controller('GrndCtrl',['$state',function ($state) {
	
	var Me = this;
	
	Me.goNav = function(st){
		$state.transitionTo(st);
	};


 }]);