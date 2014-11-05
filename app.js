angular.module('myApp', []).
	controller('myCtrl', function($scope) {
		function range(start, stop, step){
		var a=[start], b=start;
		while(b<stop){b+=step;a.push(b)}
		return a;
		};
    
    $scope.range = 100;
  	$scope.numbers = range(1, $scope.range , 1);
    $scope.$watch("range", function (){
      $scope.numbers = range(1, $scope.range , 1);
    });
  });
	