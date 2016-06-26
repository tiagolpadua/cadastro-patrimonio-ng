(function (angular, undefined) {
    'use strict';

    angular
        .module('bemControllers', [])
        .controller('ListagemController', ListagemController)
        .controller('DetalheController', DetalheController)
        .controller('IncluirController', IncluirController)
        .controller('AlterarController', AlterarController);

    AlterarController.$inject = ['$http', '$location', '$routeParams', '$window'];
    function AlterarController($http, $location, $routeParams, $window) {
        var vm = this;
        vm.salvar = salvar;

        activate();

        ////////////////

        function activate() {
            $http.get('/api/v1/bens/' + $routeParams.id)
                .success(function (response) {
                    vm.bem = response;
                })
                .error(function (message) {
                    $window.alert(message);
                });
        }

        function salvar() {
            $http.put('/api/v1/bens/' + vm.bem._id, vm.bem)
                .success(function (response) {
                    $window.alert('Bem alterado com sucesso');
                    $location.path('/bens');
                })
                .error(function (message) {
                    $window.alert(message);
                });
        }
    }

    IncluirController.$inject = ['$http', '$location', '$window'];
    function IncluirController($http, $location, $window) {
        var vm = this;
        vm.bem = {};
        vm.salvar = salvar;

        ////////////////

        function salvar() {
            $http.post('/api/v1/bens', vm.bem)
                .success(function (response) {
                    $window.alert('Bem incluído com sucesso');
                    $location.path('/bens');
                })
                .error(function (message) {
                    $window.alert(message);
                });
        }
    }

    DetalheController.$inject = ['$http', '$routeParams', '$window'];
    function DetalheController($http, $routeParams, $window) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            $http.get('/api/v1/bens/' + $routeParams.id)
                .success(function (response) {
                    vm.bem = response;
                })
                .error(function (message) {
                    $window.alert(message);
                });
        }
    }

    ListagemController.$inject = ['$http', '$window'];
    function ListagemController($http, $window) {
        var vm = this;

        vm.excluir = excluir;

        activate();

        ////////////////

        function activate() {
            $http.get('/api/v1/bens')
                .success(function (response) {
                    vm.bens = response;
                })
                .error(function (message) {
                    $window.alert(message);
                });
        }

        function excluir(id) {
            if(!$window.confirm('Confirma a exclusão do bem id: ' + id + '?')) {
                return;
            }
            $http.delete('/api/v1/bens/' + id)
                .success(function (response) {
                    $window.alert('Bem excluído com sucesso!');
                    activate();
                })
                .error(function (message) {
                    $window.alert(message);
                }); 
        }
    }

})(angular);