'use strict';
/**
 * @ngdoc function
 * @name qNotes.services:utils
 */
angular.module('qNotes')
	.directive('qnColorPicker', function () {
		return {
			restrict: 'E',
			replace: true,
			/*scope: {
				model: '=ngModel'
			},*/
			require: "ngModel",
			templateUrl: "../views/directives/qn-color-picker.html",
		    link: function(scope, el, attr, ngModelCtrl) {
		    	
		    	scope.colorSelected = "";
		     	console.log(ngModelCtrl)
		     	scope.$watch(
                    "ngModelCtrl.$viewValue",
                    function setColor( newValue, oldValue ) {
                    	console.log(newValue, oldValue )
                        if ( newValue && newValue != oldValue ) {
                        	scope.colorSelected = ngModelCtrl.$viewValue;
                        }
                    }
                );

		    }
		}
  });