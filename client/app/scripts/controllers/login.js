'use strict';

angular.module('clientApp').controller('LoginCtrl', function($scope) {
  $scope.login = function() {
    if ($scope.loginForm.$valid) {
      console.log('sending request');
    } else {
      $scope.loginForm.submitted = true;
    }

  };
});