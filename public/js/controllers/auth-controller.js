angular.module('appTrafficLess')
  .controller('AuthCtrl', ['$scope', 'Users', '$location', '$http', 'Authentication', function($scope, Users, $location, $http, Authentication) {
    
    $scope.authentication = Authentication;

    $scope.firstName = 'sdhfhsdfh';
    $scope.lastName = 'sdhfhsdfh';
    $scope.username = 'sdhfhsdfh';
    $scope.password = 'sdhfhsdfh';
    $scope.email = 'sdhfhsdfh@ef.co';

    $scope.signUp = function() {
      var user = {
        first_name: $scope.firstName,
        last_name: $scope.lastName,
        username: $scope.username,
        password: $scope.password,
        email: $scope.email
      };
      $http.post('/auth/signup', user).success(function(response) {
        $scope.authentication.user = response;
        console.log('xoxox', response);
        $location.path('/home');
      }).error(function(err) {
        console.log('sad', err);
      });
    };

    $scope.signin = function() {
      $http.post('/auth/signin', {}).success(function(response) {
        // If successful we assign the response to the global user model
        $scope.authentication.user = response;
        // And redirect to the index page
        $location.path('/');
      }).error(function(response) {
        $scope.error = response.message;
      });
    };

  }]);
