angular.module('MetronicApp').controller('KuponEditController', [ '$scope', '$stateParams', '$rootScope', '$http', 'kuponDynamConst', function( $scope, $stateParams, $rootScope, $http, kuponDynamConst) {
 

	
	$scope.id = $stateParams.kuponId;		
	$scope.getKuponDealById = function () {
		
		$http({
    	    url: kuponDynamConst.url + '/kuponDeal/'+$scope.id,
    	    method	: 'GET',
    	    headers	: { 'Access-Control-Request-Headers': 'accept, content-type','Access-Control-Request-Method': 'POST,PUT,DELETE'},
            dataType: 'json'
    	}).then(function (response) {
			if (!angular.isUndefined(response)) {
				if (!angular.isUndefined(response.error)) {
					alert("create kupon deal error :" + response.error);
				} else {
					
					$scope.deal = response.data;
				}
			} else {
				alert("Ajax Error: "+ response);
			}
		});
	};
	$scope.getKuponDealById();
 
 
	$scope.updateCurrentDeal  = function () {
		
		delete $scope.deal._id ;
		console.log("$scope.deal : " + JSON.stringify($scope.deal));
		$http({
    	    url: kuponDynamConst.url +'/updateKuponDeal/'+$scope.id,
    	    method	: 'PUT',
    	    headers	: { 'Access-Control-Request-Headers': 'accept, content-type','Access-Control-Request-Method': 'POST,PUT,DELETE'},
            dataType: 'json',
			data:	$scope.deal
    	}).then(function (response) {
			if (!angular.isUndefined(response)) {
				if (!angular.isUndefined(response.data.error)) {
					alert("create kupon deal error :" + response.data.error);
				} else {
					$scope.alert = {'message' : response.data.success , 'enable' : true , 'type':'alert alert-success'};
				}
			} else {
				alert("Ajax Error: "+ response);
			}
		});
	};
	
	
	$scope.calculateDealOffer = function () {
		
		$scope.deal.dealSaving = $scope.deal.dealValue * ($scope.deal.dealDiscount/100);
		$scope.deal.dealPrice = $scope.deal.dealValue - $scope.deal.dealSaving;
		
	};
	
$scope.$on('$viewContentLoaded', function() {   
    	// initialize core components
    	App.initAjax();

    	// set default layout mode
    	$rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    });
}]); 
