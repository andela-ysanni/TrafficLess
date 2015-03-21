var appTrafficLess = angular.module('appTrafficLess', ['ngRoute', 'ngResource']);

appTrafficLess.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/home.html',
        controller: 'appUser'
      })
      .when('/home', {
        templateUrl: '../views/loggedin-home.html',
        controller: 'appUpdates'
      })
      .when('/about', {
        templateUrl: '../views/about.html'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }
]);
