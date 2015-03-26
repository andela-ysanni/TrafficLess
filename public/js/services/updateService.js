angular.module('appTrafficLess').factory('Updates', ['$resource', function($resource) {
  return $resource('/api/updates/:update_id', {
    'update_id': '@_update_id'
  }, {
    update: {
      method: 'PUT' //the method to update updates
    }
  });
}]);

