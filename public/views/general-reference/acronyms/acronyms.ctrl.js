'use strict';

app.controller('AcronymCtrl', ['$state', 'ListSrvc', function($state, ListSrvc) {

    var ME = this;
    var L = ListSrvc;
    var LIST = L.acronyms;

    ME.searchInput = "";
    ME.searchResults = [];

    ME.doSearch = function() {
        ME.searchInput = ME.searchInput.toUpperCase();
        var toMatch = "";
        ME.searchResults = [];
        if (ME.searchInput.length > 0) {
            for (var i = 0; i < LIST.length; i++) {
                toMatch = LIST[i].code.substr(0, ME.searchInput.length);
                if (ME.searchInput == toMatch) {
                    ME.searchResults.push(LIST[i]);
                }
            }
        }
    }

    ME.goNav = function(st) {
        $state.transitionTo(st);
    };


}]);
