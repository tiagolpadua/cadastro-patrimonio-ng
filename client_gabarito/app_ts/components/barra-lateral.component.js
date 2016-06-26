var cadpat;
(function (cadpat) {
    'use strict';
    angular.module('cadpat')
        .component('barraLateral', {
        templateUrl: 'app_ts/components/barra-lateral.component.html',
        controllerAs: 'vm',
        bindings: {
            criterio: '='
        }
    });
})(cadpat || (cadpat = {}));
