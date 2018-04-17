// (function () {
//     "use strict";

//     angular.module("dataServiceModule", [])
//         .factory("CartService", CartService);

//     CartService.$inject = ["$localStorage"];
//     function CartService($localStorage) {

//         return {
//             get: get
//         }

//         function get() {
//             return $localStorage.cart;
//         }

//         function add(value) {
//             return $localStorage.cart.push(value);
//         }

//         function remove(index) {
//             var cart = $localStorage.cart;
//             cart.splice(index, 1);
//             $localStorage.cart = cart;
            
//         }

//     }
// })();