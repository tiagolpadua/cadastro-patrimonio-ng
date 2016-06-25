namespace cadpat {
    'use strict';

    angular.module('cadpat')
        .directive('acBtNavegar', acBtNavegar);

    acBtNavegar.$inject = [];
    function acBtNavegar() {
        let directive: ng.IDirective = {
            template: `<a ng-href="{{destino}}" 
                        class="btn btn-primary" role="button">{{texto}}</a>`,
            scope: {
                texto: '@',
                destino: '@'
            },
            restrict: 'E'
        };

        return directive;
    }
}
