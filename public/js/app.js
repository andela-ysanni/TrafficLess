var appTrafficLess = angular.module('appTrafficLess', ['ngRoute', 'ngResource', 'ngMaterial']);

appTrafficLess.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/home.html',
        controller: 'AuthCtrl'
      })
      .when('/home', {
        templateUrl: '../views/loggedin-home.html',
        controller: 'appUpdates'
      })
      .when('/about', {
        templateUrl: '../views/about.html'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
]);
