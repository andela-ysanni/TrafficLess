

// Authentication service for user variables
angular.module('appTrafficLess').factory('Authentication', ['$window', function($window) {
	var auth = {
		user: $window.user
	};
	
	return auth;
}]);
