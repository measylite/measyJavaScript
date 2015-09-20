// Miguel Soia
// Angular demo  Set up controllers for deep linking | routes

// set up myApp for our index2.html  call artistController from controllers.js
// define a controller to take care of the application
// ngRoute features to turn on deep linking
// js to handle the module is artistControllers
var myApp = angular.module('myApp', [
	'ngRoute',
	'artistControllers'
]);

// configure how partials will run use config variable.
// service 'RouteProvider'
myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/list', {
		templateUrl: 'partials/list.html',
		controller: 'ListControllers'  
	}).
	
	// Second partial click through detials.html 
	when('/details/:itemId' , {
		templateUrl: 'partials/details.html',
		controller: 'DetailsControllers'
	}).

	otherwise({
		redirectTo: '/list'
	});

} ])

 // name of the controller in controllers.js
 // http://goo.gl/7GgJ5O
