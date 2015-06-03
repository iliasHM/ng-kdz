angular.module('clientApp', ['ngResource'])
  .controller("AuthCtrl", function($scope, Auth) {
    Auth.query(function(data) {
      $scope.auth = data;
    });
});