(function () {
    "use strict";

    angular.module("catalogModule").config(CatalogConfig);
    CatalogConfig.$inject = ["$stateProvider"];

    function CatalogConfig($stateProvider) {

        $stateProvider
            .state("catalog", {
                url: "/",
                component: "catalog",
            })
    }
    
})();