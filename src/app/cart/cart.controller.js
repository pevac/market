(function () {
    "use strict"

    angular.module("cartModule")
        .controller("CartController", CartController);

    CartController.$inject = ["$scope", "CartService", "$state"];
    function CartController($scope, CartService, $state) {
        var vm = this;

        vm.totalSumProduct = totalSumProduct;
        vm.amountProduct = amountProduct;
        vm.deleteProduct = deleteProduct;
        vm.isEmpty = cartIsEmpty;
        vm.totalSum = totalSum;

        function totalSum() {
            var result = vm.cart.reduce(function (sum, current) {
                return sum + current.price * current.count;
            }, 0);

            return result;
        }

        function totalSumProduct(product) {
            if(angular.isUndefined(product.count)){
                product.count = 1;
            }

            return product.price * product.count;
        }

        function cartIsEmpty() {
            return CartService.isEmpty();
        }

        function amountProduct(product, op) {
            var prod = angular.copy(product);
            switch (op) {
                case "increase":
                    ++prod.count;
                    break;
                case "decrease":
                    prod.count = prod.count <= 1 ? 1 : --prod.count;
                    break;
                default:
                    break;
            }

            CartService.update(prod).then(function () {
                $state.transitionTo($state.current, $state.params, {
                    reload: true, inherit: false, notify: true
                });
            });
        }

        function deleteProduct(id) {
            CartService.remove(id)
        }
    }

})();