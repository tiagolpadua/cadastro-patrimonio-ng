namespace cadpat.bem {
    'use strict';

    interface IBem {
        descricao: string;
        urlFoto: string;
    }

    class ListagemController {
        static $inject = [];
        private bens: IBem[];

        constructor() {
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
    }

    angular
        .module('bemControllers', [])
        .controller('ListagemController', ListagemController);
}

