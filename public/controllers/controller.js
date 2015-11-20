var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
console.log("Fake Big Data 5 Controller running.");

var refresh = function(){
	$http.get('/contactlist').success(function(response) {
		//console.log("I got the data I requested");
		//$scope.contactlist = response;
		//$scope.contact = "";
	});
};

refresh();

$scope.addContact = function() {
	console.log($scope.contact);
	$http.post('/contactlist', $scope.contact).success(function(response){
		console.log(response);
		refresh();
	});
};

$scope.remove  = function(id) {
	console.log(id);
	$http.delete('/contactlist/' + id).success(function(response) {
		refresh();
	});
};

$scope.edit = function(id) {
	console.log(id);
	$http.get('/contactlist/' + id).success(function(response) {
		$scope.contact = response;
	});
};

$scope.update = function() {
	console.log($scope.contact._id);
	$http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
		refresh();
	});
};

$scope.deselect = function() {
	$scope.contact = "";
};


$scope.startAnimation = function(chart) {
	// for (var i = 0; i < 10; i ++) {
	// 	setTimeout(function() {
	// 		var j = 0;
	// 		console.log
	// 		("to do: get data from server. calling chart.render(); j is: " + j++);
	// 	}, 5000);
	// 	}


		function next (chart) {

			var xmlHttp = new XMLHttpRequest();
	    xmlHttp.open( "GET", '/factoriallist/' + '10', false );
			// false for synchronous request
	    xmlHttp.send( null );
	    console.log("xmlHttp.responseText is: " + xmlHttp.responseText);

			$http.get('/factoriallist/' + '10').
			success(function(response) {
			$scope.contact = response;
			response.d0 = Math.random();
			response.d1 = Math.random();
			response.d2 = Math.random();
			response.d3 = Math.random();
			response.d4 = Math.random();
			response.d5 = Math.random();
			response.d6 = Math.random();
			response.d7 = Math.random();
			response.d8 = Math.random();
			response.d9 = Math.random();

			console.log("d0 is: " + response.d0);
			console.log("d1 is: " + response.d1);
			console.log("d2 is: " + response.d2);
			console.log("d3 is: " + response.d3);
			console.log("d4 is: " + response.d4);
			console.log("d5 is: " + response.d5);
			console.log("d6 is: " + response.d6);
			console.log("d7 is: " + response.d7);
			console.log("d8 is: " + response.d8);
			console.log("d9 is: " + response.d9);

			console.log("draw a chart here");
      chart.render();


      setTimeout(next(chart), 2000);
		});
	};

	 next(chart);
}

}]);
