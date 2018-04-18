(function () {
    "use strict"

    angular.module("appModule")
        .controller("NavbarController", NavbarController);

    NavbarController.$inject = ["$scope", "CartService"];
    function NavbarController($scope, CartService) {
        var vm = this;

        vm.$onInit = activate;

        function activate() {
            CartService.get().then(function (data) {
                vm.cart = data;
            });
        }
    }

})();