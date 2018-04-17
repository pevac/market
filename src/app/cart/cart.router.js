(function () {
    "use strict";

    angular.module("cartModule").config(CartConfig);
    CartConfig.$inject = ["$stateProvider"];

    function CartConfig($stateProvider) {

        $stateProvider
            .state("cart", {
                url: "/cart",
                component: "cart",
            })
    }
    
})();