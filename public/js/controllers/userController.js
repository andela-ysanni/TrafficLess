angular.module('appTrafficLess')
  .controller('appUser', ['$scope', 'Users', '$location',
    function($scope, Users, $location) {

      $scope.firstName = "asgdagdsg";
      $scope.lastName = "asgdagdsg";
      $scope.username = "asgdagdsg";
      $scope.email = "asgdagdsg";
      $scope.password = "asgdagdsg";

      $scope.signUp = function() {
        var user = new Users({
          first_name: $scope.firstName,
          last_name: $scope.lastName,
          username: $scope.username,
          password: $scope.password,
          email: $scope.email
        });

        console.log(user);
        user.$save(function(data) {
          //$location.path('/api/users');
          console.log(data);
        }, function(err) {

        });
      };
    }
  ]);
