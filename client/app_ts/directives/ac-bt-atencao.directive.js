var cadpat;
(function (cadpat) {
    'use strict';
    angular.module('cadpat')
        .directive('acBtAtencao', acBtAtencao);
    acBtAtencao.$inject = [];
    function acBtAtencao() {
        var directive = {
            template: "<button ng-click=\"acao()\" \n                        class=\"btn btn-danger\" role=\"button\">{{texto}}</button>",
            scope: {
                texto: '@',
                acao: '&'
            },
            restrict: 'E'
        };
        return directive;
    }
})(cadpat || (cadpat = {}));
