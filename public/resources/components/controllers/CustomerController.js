app.controller('CustomerController', ['$scope','BlueAPIService',function($scope, BlueAPIService) {

    BlueAPIService.getCustomerProfile(function (response) {
        $scope.customerInfo = response.data[0];
    }, function (error){

    });
}]);