var myApp = angular.module('formulird', [ 'SharedServices' ]);

myApp.controller('formulirController', ['$scope', '$http', 'HTTPStateListenner', function($scope, $http, HTTPStateListenner) {
	$scope.showLoader = true;
	
	setTimeout(function(){
		window.location = "/auth.html";
	}, 5000);
}]);
