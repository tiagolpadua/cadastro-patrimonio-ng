<<<<<<< HEAD
(function() {
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
        })
        .error(function(erro) {
            $window.alert(erro);
        });
    }
}
})();
=======
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
>>>>>>> 1aa7082e0128c807fd141730c6bec18a99f20d3e
