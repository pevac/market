(function(){
    "use strict";
    angular.module("appModule")
        .config(RouterConfig);

    RouterConfig.$inject = ["$urlRouterProvider", "$stateProvider"];
    function RouterConfig( $urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise("/");
        $urlRouterProvider.when("", "/");
        
        /* @ngInject */
        $urlRouterProvider.rule(function ($injector, $location) {
            var path = $location.path();
            var normalized = path.toLowerCase();

            if (path != normalized) {
                $location.replace().path(normalized);
            }
        });
    }

})();

