'use strict';

angular.module('clientApp').service('auth', function($http, ENV) {
  this.login = function(user) {
    $http.post(ENV.apiEndpoint + 'recruiters/auth', {email: user.email, password: user.password}).
      success(function(data) {
        return data;
      }).
      error(function(data) {
        return data;
      });
  };
});

// angular.module('clientApp', ['ngResource'])
//   .factory('Auth',  ['$resource', function($resource) {
//     return $resource(ENV.apiEndpoint + 'recruiters/auth', {}, {
//       post: { method:'POST',
//               headers: {'email': userEmail, 'password': userPassword }
//             }
//       });
//     }]);

