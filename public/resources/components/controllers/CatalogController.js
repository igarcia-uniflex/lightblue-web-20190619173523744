app.controller('CatalogController', ['$scope','BlueAPIService',function($scope, BlueAPIService) {
    BlueAPIService.getCatalog(function (response) {
        $scope.itemList = response.data
    }, function (error){
        console.log("Get Inventory Error: " + error);
    });
}]);