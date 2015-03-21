angular.module('appTrafficLess')
  .controller('appUpdates', ['$scope', 'appFactory', function($scope, appFactory) {
    console.log('updatesssssssssssss');
    $scope.update = function() {
      appFactory.getUpdates().success(function(trafficData) {
        console.log('trafficData',trafficData);
      });
    };
  }]);