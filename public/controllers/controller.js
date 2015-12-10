var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
console.log("Fake Big Data 5 Controller running.");

// var refresh = function(){
// 	$http.get('/contactlist').success(function(response) {
// 		//console.log("I got the data I requested");
// 		//$scope.contactlist = response;
// 		//$scope.contact = "";
// 	});
// };

refresh();


}]);
