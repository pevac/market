(function () {
    "use strict"

    angular.module("cartModule")
        .controller("CartController", CartController);

    CartController.$inject = ["$scope", "$localStorage", "$state"];

    function CartController($scope, $localStorage, $state) {
        var vm = this;

        vm.$storage = $localStorage;

        vm.totalSum = totalSum;
        vm.amountProduct = amountProduct;
        vm.deleteProduct = deleteProduct;

        function totalSum(product) {
            if(angular.isUndefined(product.count)){
                product.count = 1;
            }

            return product.price * product.count;
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

        function deleteProduct(index) {
            vm.$storage.cart.splice(index, 1)
        }
    }

})();