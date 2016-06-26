var cadpat;
(function (cadpat) {
    'use strict';
    angular.module('cadpat')
        .component('listaBens', {
        templateUrl: 'app_ts/components/lista-bens.component.html',
        controllerAs: 'vm',
        bindings: {
            bens: '=',
            criterio: '=',
            onExcluir: '&'
        }
    });
})(cadpat || (cadpat = {}));
