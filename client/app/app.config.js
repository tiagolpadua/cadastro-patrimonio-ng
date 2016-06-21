(function (angular, undefined) {
    'use strict';

    angular.module('cadpat')
        .config(config);

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider
            .when('/bens', {
                templateUrl: 'app/bem/bem-lista.html',
                controller: 'ListagemController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/bens'
            });
    }
})(angular);