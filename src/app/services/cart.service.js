(function () {
    "use strict";

    angular.module("cartServiceModule", [])
        .factory("CartService", CartService)
        .factory("CartDataService", CartDataService);

    CartDataService.$inject = ["$q", "$timeout"];
    function CartDataService($q, $timeout) {
        var cart = [{ "id": 3, "name": "product3", "type": "productType3", "shortDescription": "shortDescription3", "inStock": true, "price": "125", "count": 1 }];

        return {
            getAll: getAll,
            remove: remove,
            create: create, 
            update: update
        }

        function getAll() {
            return $q(function (resolve, reject) {
                $timeout(function () {
                    resolve(cart);
                }, 100)
            });
        }

        function create(value) {
            return $q(function (resolve, reject) {
                cart.push(value);

                $timeout(function () {
                    resolve(value);
                }, 100)
            });
        }

        function update(value) {
            return $q(function (resolve, reject) {
                var index = cart.findIndex(function (item) {
                    return item.id == value.id;
                });

                if (index && index == -1) reject();

                cart[index] = value;

                $timeout(function () {
                    resolve(cart[index]);
                }, 100)
            });
        }

        function remove(id) {
            return $q(function (resolve, reject) {
                var index = cart.findIndex(function (item) {
                    return item.id == id;
                });

                if (index && index == -1) reject();

                cart.splice(index, 1);

                $timeout(function () {
                    resolve(true);
                }, 100)
            });
        }
    }

    CartService.$inject = ["$localStorage", "$q", "CartDataService"];
    function CartService($localStorage,$q, CartDataService) {
        var isActivate = false;

        return {
            get: get,
            add: add,
            remove: remove,
            update: update,
            getLenght: getLenght,
            contain: contain,
            isEmpty: isEmpty
        }

        function get() {
            if(!isActivate) {
                return CartDataService.getAll().then(function (data) {
                    isActivate = true;
                    $localStorage.$reset({ cart: data });
                    return $localStorage.cart
                });
            }
            return  $q(function (resolve, reject) {
                resolve($localStorage.cart);
            });
        }

        function add(value) {
            if(contain(value)) return;

            CartDataService.create(value).then(function (data) {
                $localStorage.cart.push(data);
            })
        }

        function remove(value) {
            CartDataService.remove(value).then(function () {
                var index = !angular.isArray($localStorage.cart) || $localStorage.cart.findIndex(function (item) {
                    return item.id == value;
                });

                if (index && index == -1) return;

                $localStorage.cart.splice(index, 1);
            });
        }

        function update(value) {
            return CartDataService.update(value).then(function (data) {
                var index = $localStorage.cart.findIndex(function (item) {
                    return item.id == data.id;
                });

                $localStorage.cart[index] = data;
            });
        }

        function getLenght() {
            return $localStorage.cart.length;
        }

        function isEmpty() {
            return $localStorage.cart&&$localStorage.cart.length <= 0
        }

        function contain(value) {
            var arr = $localStorage.cart.filter(function (item) {
                return item.id == value.id;
            });

            return arr.length > 0;
        }
    }

})();