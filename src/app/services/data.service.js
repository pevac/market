(function () {
    "use strict";

    angular.module("dataServiceModule", [])
        .factory("DataService", DataService);

    DataService.$inject = ["$q"];
    function DataService($q) {

        var products = [{ id: 1, name: "product1", type: "productType1", shortDescription: "shortDescription1", inStock: true, price: "100" },
            { id: 2, name: "product2", type: "productType2", shortDescription: "shortDescription2", inStock: false, price: "200" },
            { id: 3, name: "product3", type: "productType3", shortDescription: "shortDescription3", inStock: true, price: "125" },
        ];

        function getProducts() {
            return $q(function(resolve, reject){
                resolve(products);
            });
            
        }

        return {
            getProducts: getProducts
        }
        
    }
})();