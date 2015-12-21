angular.module('MetronicApp').controller('KuponRegController', function( $scope, $rootScope, $http, kuponDynamConst) {
 

	$scope.createNewDeal  = function () {
		
		console.log("$scope.deal :" +$scope.deal);
		$http({
    	    url: kuponDynamConst.url + '/saveKuponDeals',
    	    method	: 'POST',
    	    headers	: { 'Access-Control-Request-Headers': 'accept, content-type','Access-Control-Request-Method': 'POST,PUT,DELETE'},
            dataType: 'json',
			data	:	$scope.deal
    	}).then(function (response) {
			if (!angular.isUndefined(response)) {
				if (!angular.isUndefined(response.data.error)) {
					alert("create kupon deal error :" + response.data.error);
				} else {
					$scope.alert = {'message' : response.data.success , 'enable' : true , 'type':'alert alert-success'};
					$scope.deal = {};
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
}); 
