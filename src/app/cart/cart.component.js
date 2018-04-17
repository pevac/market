(function () {
    'use strict';

    angular
        .module('cartModule')
        .component('cart', Cart());

    function Cart() {
        return {
            templateUrl: "app/cart/cart.tmpl.html",
            controller: "CartController",
            controllerAs: "vm"
        }
    }

})();