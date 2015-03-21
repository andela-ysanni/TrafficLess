angular.module('appTrafficLess').factory('Users', ['$resource',  function($resource) {
  return $resource('/api/users/:user_id', {
    'user_id': '@_id'
  }, {
    update: {
      method: 'PUT' //the method to update a user details
    }
  });
}]);
// updateUser: function() {
// 	return $http.put('/api/users/:user_id');
// },
// deleteUser: function() {
// 	return $http.delete('/api/users/:user_id');
// }
