'use strict';
/**
 * @ngdoc function
 * @name qNotes.services:utils
 */
angular.module('qNotes')
	.directive('qnColorPicker', function (utils) {
		return {
			restrict: 'E',
			replace: true,
			/*scope: {
				colors: '='
			},*/
			require: "ngModel",
			templateUrl: "../views/directives/qn-color-picker.html",
		    link: function(scope, el, attr, ngModelCtrl) {

		    	if (!ngModelCtrl) {
                    return; 
		    	}

		    	console.log(scope)
		    	console.log(ngModelCtrl)
		    	
		    	scope.allColors 	= utils.getColors();
		    	scope.colorSelected = {};
		    	scope.colorSelected.color = ngModelCtrl.$viewValue;

		     	console.log(ngModelCtrl);

              	scope.actions = {
                	closeModal: function() {                		
		     			scope.showColors = false;
		     		},

		     		setColor: function(color) {
		     			scope.colorSelected.color = color;
		     			ngModelCtrl.$setViewValue(color);
		     			this.closeModal();
		     		}
                };

                var bindings = {
                	bind: function() {
                		angular.element('.modal-dialog').click(scope.actions.closeModal);

                	},

                	unbind: function() {
				     	scope.$on('$destroy', function(e) {
						 	angular.element('.modal-dialog').unbind('click', scope.actions.closeModal);
						});
                	}
                	
                }

                var init = {
                	initAll: function() {
                		bindings.bind();
                		bindings.unbind();                		
                	}
                };

                init.initAll();

		    }
		}
  });