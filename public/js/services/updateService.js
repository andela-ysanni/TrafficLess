angular.module('appTrafficLess').factory('Updates', ['$resource', function($resource) {
  return $resource('/api/updates/:update_id', {
    'update_id': '@_update_id'
  }, {
    update: {
      method: 'PUT' //the method to update updates
    }
  });
}]);

  // getUser: function(username) {
  //     $.ajax({
  //       url: 'https://api.github.com/users/' + username,
  //       data: { format: 'json'
  //       },
  //       error: function() {
  //         $('.loginError').html('<p>An error has occurred</p>');
  //       },
  //       dataType: 'jsonp',
  //       success: GithubAPI.getUserCallback,
  //       type: 'GET'
  //     });
  //   }