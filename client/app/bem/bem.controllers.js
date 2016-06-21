(function (angular, undefined) {
    'use strict';

    angular
        .module('bemControllers', [])
        .controller('ListagemController', ListagemController);

    ListagemController.$inject = ['$http', '$window'];
    function ListagemController($http, $window) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            $http.get('/api/v1/bens')
            .success(function(response) {
                vm.bens = response;
            });
        }
    }
})(angular);