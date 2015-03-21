angular.module('appTrafficLess').factory('appFactory', ['$http', function($http) {
  return {
    getUpdates: function() {
      return $http.get('/api/updates');
    }
  };
}]);
