angular.module('appTrafficLess')
  .controller('appUser', ['$scope', 'Users', '$location', function($scope, Users, $location) {
    $scope.signUp = function() {
      //if ($scope.firstName.length === 0) {console.log('nahhhh');}

      var user = new Users({
        first_name: $scope.firstName,
        last_name: $scope.lastName,
        username: $scope.username,
        password: $scope.password,
        email: $scope.email
      });
      user.$save(function(data) {
        console.log(data);
        $location.path('../views/loggedin-home.html');
      }, function(err) {

      });
    };

  }]);
