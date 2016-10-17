(function() {

  'use strict';

const app = angular.module('formControl');

  app.controller('mainController', function($scope) {
  	$scope.submitForm = function(isValid) {
  		if (isValid) {
  			alert('our form is amazing');
  		}
  	};
  });

})();
