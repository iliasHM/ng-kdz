'use strict';

angular.module('clientApp').controller('LoginCtrl', function($scope, auth) {
  $scope.login = function() {
    if ($scope.loginForm.$valid) {
      auth.login($scope.user);
    }
  };
});