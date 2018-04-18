(function () {
    "use strict"

    angular.module("catalogModule")
        .controller("CatalogController", CatalogController);

    CatalogController.$inject = ["$scope", "CartService", "$state"];

    function CatalogController($scope, CartService, $state) {
        var vm = this;
        vm.addToCart = addToCart;
        vm.containProduct = containProduct;

        function addToCart(product) {
            CartService.add(angular.copy(product));
            $state.go("cart");
        }

        function containProduct(product) {
            return CartService.contain(product);
        }

    }

})();


