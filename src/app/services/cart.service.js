(function () {
    "use strict";

    angular.module("cartServiceModule", [])
        .run(Cart)
        .factory("CartService", CartService);

    Cart.$inject = ["$localStorage"];
    function Cart($localStorage) {
        if (!angular.isArray($localStorage.cart)) {
            $localStorage.$default({ cart: [] });
        }
    }

    CartService.$inject = ["$localStorage"];
    function CartService($localStorage) {

        return {
            get: get,
            add: add,
            remove: remove,
            getLenght: getLenght,
            contain: contain,
            isEmpty: isEmpty
        }

        function get() {
            return $localStorage.cart;
        }

        function add(value) {
            if(contain(value)) return;

            $localStorage.cart.push(value);
        }

        function remove(value) {
            var index = $localStorage.cart.findIndex(function (item) {
                return item.id == value;
            });

            if(index == -1) return;

            $localStorage.cart.splice(index, 1);
        }

        function getLenght() {
            return $localStorage.cart.length;
        }

        function isEmpty() {
            return $localStorage.cart.length <= 0
        }

        function contain(value) {
            var arr = $localStorage.cart.filter(function (item) {
                return item.id == value.id;
            });

            return arr.length > 0;
        }
    }

})();