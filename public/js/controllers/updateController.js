angular.module('appTrafficLess')
  .controller('appUpdates', ['$scope', 'Updates', function($scope, Updates) {
    // console.log('updatesssssssssssss');
    $scope.update = function() {
        console.log('trafficData');
        var update = new Updates({
        	from: $scope.from,
        	to: $scope.to,
        	is: $scope.is,
        	dueTo: $scope.Dueto
        });
    	update.$save(function(trafficData){
    		//var traffic = $scope.trafficData;
    			console.log(trafficData);	
    	}, function(error){
    			console.log(error);
    	});
    };
  }]);