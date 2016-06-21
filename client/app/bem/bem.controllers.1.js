(function () {
    'use strict';

    angular
        .module('bemControllers', [])
        .controller('ListagemController', ListagemController);

    ListagemController.$inject = [];
    function ListagemController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.bens = [
                {
                    descricao: 'Prédio do Banco Central do Brasil - BACEN',
                    urlFoto: 'http://bit.ly/imgbacen'
                },
                {
                    descricao: 'Palácio dos Buritis, sede do GDF',
                    urlFoto: 'http://bit.ly/imgburiti'
                },
                {
                    descricao: 'Câmara dos deputados do DF',
                    urlFoto: 'http://bit.ly/imgcamara'
                }
            ];
        }
    }
})();
