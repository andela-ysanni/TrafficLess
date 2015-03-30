angular.module('appTrafficLess')
  .controller('appUpdates', ['$scope', 'Updates', '$http', function($scope, Updates, $http) {
    $scope.displayEditForm = false;
    $scope.$on('$viewContentLoaded', function() {
      $http.get('/api/updates').success(function(updates) {
        $scope.updates = updates;
      }).error(function(error) {});
    });

    $scope.update = function() {
      var update = new Updates({
        from: angular.lowercase($scope.from),
        to: angular.lowercase($scope.to),
        is: angular.lowercase($scope.is),
        dueTo: angular.lowercase($scope.Dueto),
        user: '55121b59ba90032c1f725404'
      });
      update.$save(function(trafficData) {}, function(error) {
        console.log(error);
      });
      $http.get('/api/updates').success(function(updates) {
        $scope.updates = updates;
      }).error(function(error) {});
      $scope.from = '';
      $scope.to = '';
      $scope.is = '';
      $scope.Dueto = '';
    };

    $scope.search = function() {
      var query = {
        from: angular.lowercase($scope.searchFrom),
        to: angular.lowercase($scope.searchTo)
      };
      $http.post('/api/updates/update', query).success(function(data) {
        $scope.updates = data;
        if (data.length === 0) {
          $http.get('/api/updates').success(function(updates) {
            $scope.updates = updates;
          }).error(function(error) {});
          $scope.noResult = "Oops, no match for your search but we have some traffic updates for you below";
          $scope.searchFrom = '';
          $scope.searchTo = '';
        }
      }).error(function(error) {});

    };

    $scope.edit = function(update) {
      $scope.displayEditForm = true;
      $scope.editedUpdate = update;
    };

    $scope.editUpdate = function() {
      $scope.displayEditForm = false;
      var update = $scope.editedUpdate;
      $http.put('/api/updates/' + update._id, update).success(function(data) {
        $http.get('/api/updates').success(function(updates) {
          $scope.update = updates;
        }).error(function(error) {});
      }).error(function(error) {});
    };

    $scope.delete = function(updateId) {
      var deleteUpdate = confirm("Are you sure you want to delete?");
      if (deleteUpdate) {
        $http.delete('/api/updates/' + updateId).success(function() {
          $http.get('/api/updates').success(function(updates) {
            $scope.updates = updates;
          }).error(function(error) {});
        }).error(function(error) {});
      }
    };
  }]);
