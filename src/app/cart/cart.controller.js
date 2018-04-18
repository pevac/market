(function () {
    "use strict"

    angular.module("cartModule")
        .controller("CartController", CartController);

    CartController.$inject = ["$scope", "CartService", "$state"];
    function CartController($scope, CartService, $state) {
        var vm = this;

        vm.cart = CartService.get();

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
            switch (op) {
                case "increase":
                    ++product.count;
                    break;
                case "decrease":
                    product.count = product.count <= 1 ? 1 : --product.count;
                    break;
                default:
                    break;
            }
        }

        function deleteProduct(id) {
            CartService.remove(id)
        }
    }

})();