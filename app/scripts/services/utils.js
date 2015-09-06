'use strict';

/**
 * @ngdoc function
 * @name qNotes.services:utils
 */
angular.module('qNotes')
	.factory('utils', function () {

		var module = {};
	    
	    module.getColors = function() {
	    	return [
	    			{"style":"notes-c-yw"}, 
	    			{"style":"notes-c-rd"}, 
	    			{"style":"notes-c-br"},
	    			{"style":"notes-c-pk"},
	    			{"style":"notes-c-vl"},
	    			{"style":"notes-c-gr"},
	    			{"style":"notes-c-gd"},
	    			{"style":"notes-c-bl"},
	    			{"style":"notes-c-bd"}
	    			];
	    }

	    
	    return module;
  });