(function() {
  'use strict';

  angular
    .module('appModule')
    .component('navigation', Navigation());

    function Navigation() {
      return {
        templateUrl: "app/layout/navbar.html",
        controller: "NavbarController",
        controllerAs: "vm"
      }
    }
})();
