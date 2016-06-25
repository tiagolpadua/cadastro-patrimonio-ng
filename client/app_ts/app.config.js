var cadpat;
(function (cadpat) {
    'use strict';
    angular.module('cadpat')
        .config(config);
    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/bens', {
            template: '<home-bens></home-bens>'
        })
            .when('/bens/incluir', {
            templateUrl: 'app_ts/bem/bem-mantem.html',
            controller: 'IncluirController',
            controllerAs: 'vm'
        })
            .when('/bens/alterar/:id', {
            templateUrl: 'app_ts/bem/bem-mantem.html',
            controller: 'AlterarController',
            controllerAs: 'vm'
        })
            .when('/bens/:id', {
            templateUrl: 'app_ts/bem/bem-detalhe.html',
            controller: 'DetalheController',
            controllerAs: 'vm'
        })
            .otherwise({
            redirectTo: '/bens'
        });
    }
})(cadpat || (cadpat = {}));
