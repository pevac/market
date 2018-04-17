(function(){
    "use strict";
    angular.module("appModule")
        .component("app", {
            template:   '<navigation></navigation>'+
                        '<div class="main-view  ng-cloak" ui-view ></div>'
        })
})();

