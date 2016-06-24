var cadpat;
(function (cadpat) {
    'use strict';
    angular.module('cadpat')
        .directive('acCabecalho', acCabecalho);
    acCabecalho.$inject = [];
    function acCabecalho() {
        var directive = {
            templateUrl: 'app_ts/directives/ac-cabecalho.directive.html',
            scope: {
                texto: '@'
            },
            transclude: true,
            restrict: 'E'
        };
        return directive;
    }
})(cadpat || (cadpat = {}));
