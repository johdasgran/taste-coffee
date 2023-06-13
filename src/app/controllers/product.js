app.controller("productCtrl", ["$scope", "CatalogService", "$routeParams", function($scope, CatalogService, $routeParams){

    console.log($routeParams.id)


    $scope.product = CatalogService.getProductById($routeParams.id);

    console.log($scope.product)

    console.log("yuuup")


}])