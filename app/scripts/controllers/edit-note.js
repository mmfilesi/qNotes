'use strict';

/**
 * @ngdoc function
 * @name qNotes.controller:editNote
 * @description
 * # editNote
 */

angular.module('qNotes')
	.controller('editNote', function ($scope, $translate, $timeout, factory, config, $modalInstance, data) {
	   
	    $scope.note = data.note;
	    $scope.mode = data.mode;

	   	if ( $scope.mode != "view" ) {
    	    $scope.formNotes = {};
    		$scope.formNotes.title 	= $scope.note.title || "";
    		$scope.formNotes.text 	= $scope.note.text || "";
    		$scope.formNotes.color 	= $scope.note.color || "notes-c-yw";
    		$scope.formNotes.stick 	= $scope.note.stick || false;
    		$scope.formNotes.id 	= $scope.note.id || Date.now();
    	}

	    $scope.actions = {
	    	accept: function() {
	    		if ( $scope.mode === "add" ) {
	    			$scope.$parent.qNotes.notes = factory.addNote($scope.formNotes);	    			
	    		} else if ( $scope.mode == "edit" ) {	    			
	    			$scope.$parent.qNotes.notes = factory.editNote($scope.formNotes);	    			
	    		}

	    		$modalInstance.close();
	    	},

	    	cancel: function() {
	    		$modalInstance.close();
	    	}
	    };

	    var init = {
	    	initAll: function() {
	    	}
	    };

  	});
