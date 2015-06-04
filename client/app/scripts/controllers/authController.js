'use strict';

angular.module('clientApp', ['ngResource'])
  .controller('AuthCtrl', function($scope, Auth) {
    Auth.save(function(data) {
      $scope.auth = data;
    });
  });