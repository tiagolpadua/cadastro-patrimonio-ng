namespace cadpat {
    'use strict';

    angular.module('cadpat')
        .directive('acBtAtencao', acBtAtencao);

    acBtAtencao.$inject = [];
    function acBtAtencao() {
        let directive: ng.IDirective = {
            template: `<button ng-click="acao()" 
                        class="btn btn-danger" role="button">{{texto}}</button>`,
            scope: {
                texto: '@',
                acao: '&'
            },
            restrict: 'E'
        };

        return directive;
    }
}
