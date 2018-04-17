(function () {
    "use strict"

    angular.module("catalogModule")
        .controller("CatalogController", CatalogController);

    CatalogController.$inject = ["$scope", "$localStorage", "$state"];

    function CatalogController($scope, $localStorage, $state) {
        var vm = this;

        var products = [{ id: 1, name: "product1", type: "productType1", shortDescription: "shortDescription1", inStock: true, price: "100"},
            { id: 2, name: "product2", type: "productType2", shortDescription: "shortDescription2", inStock: false, price: "200" },
            { id: 3, name: "product3", type: "productType3", shortDescription: "shortDescription3", inStock: true, price: "125" },
                        ];

        vm.products = products;

        vm.addToCart = addToCart;

        function addToCart(product) {
            if (!angular.isArray($localStorage.cart)){
                $localStorage.$default({ cart: []});
            }
            
            $localStorage.cart.push(product);
            $state.go("cart");
        }

    }

})();


