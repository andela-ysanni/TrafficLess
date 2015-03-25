angular.module('appTrafficLess')
  .controller('appUpdates', ['$scope', 'Updates', '$http', function($scope, Updates, $http) {

    $scope.searchFrom = "#ipja";
    $scope.searchTo = "#ikeja";
    
    $scope.update = function() {
      //console.log('trafficData');
      var update = new Updates({
        from: $scope.from,
        to: $scope.to,
        is: $scope.is,
        dueTo: $scope.Dueto,
        user: '55121b59ba90032c1f725404'
      });
      console.log('sgasdgsa');
      update.$save(function(trafficData) {
        //var traffic = $scope.trafficData;
        //console.log('new',trafficData);
      }, function(error) {
        console.log(error);
      });
      $http.get('/api/updates').success(function(updates) {
        $scope.updates = updates;
        console.log('old', $scope.updates);
      }).error(function(error) {});
    };

    $scope.search = function() {
      console.log('yeeahhh');
      $http.get('/api/updates-lol').success(function(data) {
        console.log(data);
      }).error(function(error) {

      });
    };
  }]);
