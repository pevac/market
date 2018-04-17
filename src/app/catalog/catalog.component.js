(function () {
    'use strict';

    angular
        .module('catalogModule')
        .component('catalog', Catalog());

    function Catalog() {
        return {
            templateUrl: "app/catalog/catalog.tmpl.html",
            controller: "CatalogController",
            controllerAs: "vm"
        }
    }

})();