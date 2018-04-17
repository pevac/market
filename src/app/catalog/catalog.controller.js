(function () {
    "use strict"

    angular.module("catalogModule")
        .controller("CatalogController", CatalogController);

    CatalogController.$inject = ["$scope", "$localStorage", "$state"];

    function CatalogController($scope, $localStorage, $state) {
        var vm = this;
        vm.addToCart = addToCart;

        function addToCart(product) {
            if (!angular.isArray($localStorage.cart)){
                $localStorage.$default({ cart: []});
            }
            
            $localStorage.cart.push(angular.copy(product));
            $state.go("cart");
        }


    }

})();


