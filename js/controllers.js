//Miguel Soria
//Demo Angular.js


// Name Spacing to protect our vars | then set to Angular command angular.module
var artistControllers = angular.module('artistControllers',[]);  // [] empty array

//List Controller  |  Add http sevice to our controller
artistControllers.controller('ListControllers',['$scope','$http',function($scope, $http) {
	//Ask HTTP to get out json FILE The MODEL has JSON Objects  
  $http.get('js/data.json').success(function(data){
    $scope.artists  = data;
    $scope.artistOrder  = 'name';  // Load our option value 'name' from our list.html 

  });	 
}]);
//Function for the Controller - 
//Note: Chrome local testing error when using XHR. Use a disable flag.
// END CONTROLLER 

/* Another Controller
   for the details page
 */
artistControllers.controller('DetailsControllers',['$scope','$http','$routeParams',function($scope, $http,$routeParams) {
	//Ask HTTP to get out json FILE The MODEL has JSON Objects  
  $http.get('js/data.json').success(function(data){
    $scope.artists  = data;
    $scope.whichItem  = $routeParams.itemId;  // find which item was clicked form list and detial html

    // Add plain js for back button 
    if ($routeParams.itemId > 0) {
    	$scope.prevItem = Number($routeParams.itemId) - 1;
	} else {
		$scope.prevItem = $scope.artists.length - 1;
	}

	// Add plain js for forward button
	if ($routeParams.itemId < $scope.artists.length - 1) {
    	$scope.nextItem = Number($routeParams.itemId) + 1;
	} else {
		$scope.nextItem = 0;
	}
  });	 
}]);