(function () {
    "use strict";

    angular.module("dataServiceModule", [])
        .factory("DataService", DataService);

    DataService.$inject = ["$q", "$timeout"];
    function DataService($q, $timeout) {

        var products = [{ id: 1, name: "product1", type: "productType1", shortDescription: "shortDescription1", inStock: true, price: "100" },
            { id: 2, name: "product2", type: "productType2", shortDescription: "shortDescription2", inStock: false, price: "200" },
            { id: 3, name: "product3", type: "productType3", shortDescription: "shortDescription3", inStock: true, price: "125" },
            { id: 4, name: "product4", type: "productType4", shortDescription: "shortDescription4", inStock: true, price: "600" },
            { id: 5, name: "product5", type: "productType5", shortDescription: "shortDescription5", inStock: true, price: "322" },
        ];

        function getProducts() {
            return $q(function(resolve, reject){
                $timeout(function () {
                    resolve(products);
                },100)
            });
            
        }

        return {
            getProducts: getProducts
        }
    }
    
})();