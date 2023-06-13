var app = angular.module("app", ["ngRoute"])
.config(function($routeProvider){
    $routeProvider
        .when("/catalog", {
            controller: "catalogCtrl",
            templateUrl: "./src/app/views/catalog.html"
        })
        .when("/catalog/:id", {
            controller: "productCtrl",
            templateUrl: "./src/app/views/product.html"
        })
        .otherwise("/catalog")
})