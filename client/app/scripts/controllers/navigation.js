'use strict';

angular.module('clientApp')
  .controller('NavigationCtrl', function ($scope, $location) {
    $scope.isActive = function(path) {
      return path === $location.path();
    };
  });