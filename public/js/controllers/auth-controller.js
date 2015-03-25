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
        $scope.authentication.user.email = response.email;
        console.log('xoxox', response.email);
        $location.path('/home');
      }).error(function(err) {
        console.log('sad', err);
      });
    };

    $scope.signIn = function() {
      console.log('bitch face');
      $http.post('/auth/signin', {}).success(function(response) {
        // If successful we assign the response to the global user model
        $scope.authentication.user = response;
        // And redirect to the index page
        $location.path('/home');
      }).error(function(response) {
        $scope.error = response.message;
      });
    };

  }]);
