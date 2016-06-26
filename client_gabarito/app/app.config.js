(function (angular, undefined) {
    'use strict';

    angular.module('cadpat')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/bens', {
                templateUrl: 'app/bem/bem-lista.html',
                controller: 'ListagemController',
                controllerAs: 'vm'
            })
            .when('/bens/incluir', {
                templateUrl: 'app/bem/bem-mantem.html',
                controller: 'IncluirController',
                controllerAs: 'vm'
            })
            .when('/bens/alterar/:id', {
                templateUrl: 'app/bem/bem-mantem.html',
                controller: 'AlterarController',
                controllerAs: 'vm'
            })
            .when('/bens/:id', {
                templateUrl: 'app/bem/bem-detalhe.html',
                controller: 'DetalheController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/bens'
            });
    }
})(angular);
