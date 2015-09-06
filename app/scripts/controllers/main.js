'use strict';

/**
 * @ngdoc function
 * @name qNotes.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the qNotes
 */
angular.module('qNotes')
	.controller('MainCtrl', function ($scope, $translate, config, factory, utils,  $modal, $log) {

    	$scope.qNotes 		= {};
    	$scope.qNotes.notes	= factory.getNotes();
    	$scope.colors 		= [];
    	$scope.colorsFilter = [];

    	$scope.actions = {
    		viewNote: function(note) {
    			modal.openModal("view", note);
      		},

      		addNote: function() {
      			modal.openModal("add", {});
      		},

    		editNote: function(note) {
    			modal.openModal("edit", note);
    		}
    	};

    	$scope.filter = {
    		filterByColor: function(colorKey) {
    			var index = $scope.colorsFilter.indexOf(colorKey);
    			if ( index != -1 ) {
    				$scope.colorsFilter.splice(index, 1);
    			} else {
    				$scope.colorsFilter.push(colorKey);
    			}
    		}
    	};

    	// http://ngmodules.org/modules/ngEkathuwa

    	var modal = {
    		openModal: function(mode, note) {
    			var data = {"mode":mode, "note":note};
    			var modalInstance = $modal.open({
			    	animation: true,
			     	templateUrl: 'views/edit-note.html',
			      	controller: 'editNote',
			      	size: 'lg',
			      	scope: $scope,
			      	resolve: {
			        	data: function () {
			          		return data;
			        	}
			      	}
			    });
    		}
    	};

    	var init = {
    		initData: function() {
    			$scope.colors = utils.getColors();
    		},

    		initAll: function() {
    			this.initData();
    		}
    	};

    	init.initAll();
});
