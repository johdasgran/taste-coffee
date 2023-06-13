app.controller("catalogCtrl", ["$scope", "CatalogService", function($scope, CatalogService) {


    $scope.catalog = CatalogService.getCatalog();






}])