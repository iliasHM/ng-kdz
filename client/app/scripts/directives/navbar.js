'use strict';

angular.module('clientApp')
  .directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/shared/navbar.html',
      controller: 'NavigationCtrl'
    }
  });