var cadpat;
(function (cadpat) {
    'use strict';
    angular.module('cadpat')
        .directive('acBtNavegar', acBtNavegar);
    acBtNavegar.$inject = [];
    function acBtNavegar() {
        var directive = {
            template: "<a ng-href=\"{{destino}}\" \n                        class=\"btn btn-primary\" role=\"button\">{{texto}}</a>",
            scope: {
                texto: '@',
                destino: '@'
            },
            restrict: 'E'
        };
        return directive;
    }
})(cadpat || (cadpat = {}));
