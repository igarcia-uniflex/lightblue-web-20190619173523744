app.controller('ItemController', ['$scope','$routeParams','BlueAPIService',function($scope, $routeParams, BlueAPIService) {
    BlueAPIService.getItemById($routeParams.id, function (response) {
        console.log("Get Item Detail Result: " + response);
        $scope.item = response.data
    }, function (error){
        console.log("Get Item Detail Error: " + error);
    });
}]);