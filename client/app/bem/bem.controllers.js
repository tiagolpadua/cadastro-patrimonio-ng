var cadpat;
(function (cadpat) {
    var bem;
    (function (bem) {
        'use strict';
        var ListagemController = (function () {
            function ListagemController() {
                this.bens = [
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
            ListagemController.$inject = [];
            return ListagemController;
        }());
        angular
            .module('bemControllers', [])
            .controller('ListagemController', ListagemController);
    })(bem = cadpat.bem || (cadpat.bem = {}));
})(cadpat || (cadpat = {}));
