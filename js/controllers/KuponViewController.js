angular.module('MetronicApp').controller('KuponViewController', function( $scope, $rootScope, $http) {
 

	$scope.getAllDeals  = function () {
		
		console.log("$scope.deal :" +$scope.deal);
		$http({
    	    url: 'http://localhost:3000/allKuponDeal',
    	    method	: 'GET',
    	    headers	: { 'Access-Control-Request-Headers': 'accept, content-type','Access-Control-Request-Method': 'POST,PUT,DELETE'},
            dataType: 'json'
    	}).then(function (response) {
			if (!angular.isUndefined(response)) {
				if (!angular.isUndefined(response.error)) {
					alert("create kupon deal error :" + respObj.error);
				} else {
					console.log(JSON.stringify(response));
					$scope.kuponDealList = response.data;
					
				}
			} else {
				alert("Ajax Error: "+ respObj);
			}
		});
	};
	$scope.getAllDeals();
	
	
	$scope.deleteDeal  = function (id) {
		
		$http({
    	    url: 'http://localhost:3000/deleteKuponDeal/' + id,
    	    method	: 'DELETE',
    	    headers	: { 'Access-Control-Request-Headers': 'accept, content-type','Access-Control-Request-Method': 'POST,PUT,DELETE'},
            dataType: 'json'
    	}).then(function (response) {
			if (!angular.isUndefined(response)) {
				if (!angular.isUndefined(response.data.error)) {
					alert("create kupon deal error :" + response.data.error);
				} else {
					console.log(JSON.stringify(response));
					
					$scope.alert = {'message' : response.data.success , 'enable' : true , 'type':'alert alert-success'};
					
					$scope.getAllDeals();
				}
			} else {
				alert("Ajax Error: "+ respObj);
			}
		});
	};
		
	$scope.$on('$viewContentLoaded', function() {   
    	// initialize core components
    	App.initAjax();

    	// set default layout mode
    	$rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    });
}); 
