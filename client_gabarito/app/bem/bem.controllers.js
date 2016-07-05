(function(angular, undefined) {
    'use strict';

    angular
        .module('bemControllers', [])
        .controller('ListagemController', ListagemController)
        .controller('DetalheController', DetalheController)
        .controller('IncluirController', IncluirController)
        .controller('AlterarController', AlterarController);

    AlterarController.$inject = ['$location', '$routeParams', '$window', 'bemService'];

    function AlterarController($location, $routeParams, $window, bemService) {
        var vm = this;
        vm.salvar = salvar;

        activate();

        ////////////////

        function activate() {
            bemService.get({
                id: $routeParams.id,
            }, function(bem) {
                vm.bem = bem;
            }, function(erro) {
                $window.alert(erro);
            });
        }

        function salvar() {
            bemService.update({
                    id: $routeParams.id,
                },
                vm.bem,
                function() {
                    $window.alert('Bem alterado com sucesso');
                    $location.path('/bens');
                },
                function(erro) {
                    $window.alert(erro);
                });
        }
    }

    IncluirController.$inject = ['$location', '$window', 'bemService'];

    function IncluirController($location, $window, bemService) {
        var vm = this;
        vm.bem = {};
        vm.salvar = salvar;

        ////////////////

        function salvar() {
            if (vm.frmbem.$valid) {
                bemService.save(
                    vm.bem,
                    function() {
                        $window.alert('Bem incluído com sucesso');
                        $location.path('/bens');
                    },
                    function(erro) {
                        $window.alert(erro);
                    });
            }
        }
    }

    DetalheController.$inject = ['$routeParams', '$window', 'bemService'];

    function DetalheController($routeParams, $window, bemService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            bemService.get({
                id: $routeParams.id,
            }, function(bem) {
                vm.bem = bem;
            }, function(erro) {
                $window.alert(erro);
            });
        }
    }

    ListagemController.$inject = ['$window', 'bemService'];

    function ListagemController($window, bemService) {
        var vm = this;

        vm.excluir = excluir;

        activate();

        ////////////////

        function activate() {
            bemService.query(function(bens) {
                    vm.bens = bens;
                },
                function(erro) {
                    $window.alert(erro);
                });
        }

        function excluir(id) {
            if (!$window.confirm('Confirma a exclusão do bem id: ' + id + '?')) {
                return;
            }

            bemService.delete({
                id: id,
            }, function() {
                $window.alert('Bem excluído com sucesso!');
                activate();
            }, function(erro) {
                $window.alert(erro);
            });
        }
    }

})(angular);
