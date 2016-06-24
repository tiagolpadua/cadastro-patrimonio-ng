namespace cadpat {
    'use strict';

    angular.module('cadpat')
        .directive('acCabecalho', acCabecalho);

    acCabecalho.$inject = [];
    function acCabecalho() {
        let directive: ng.IDirective = {
            templateUrl: 'app_ts/directives/ac-cabecalho.directive.html',
            scope: {
                texto: '@'
            },
            transclude: true,
            restrict: 'E'
        };

        return directive;
    }
}
