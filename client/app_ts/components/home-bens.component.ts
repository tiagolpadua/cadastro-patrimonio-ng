namespace cadpat {
    'use strict';

    class HomeBensController {
        static $inject = ['$http', '$window'];
        bens: cadpat.bem.IBem[];
        nomePessoa: string;

        constructor(private $http: ng.IHttpService,
            private $window: ng.IWindowService) {
            this.nomePessoa = 'Chico Buarque';
            this.listar();
        }

        ////////////////

        listar() {
            this.$http.get('/api/v1/bens')
                .success((response: cadpat.bem.IBem[]) => {
                    this.bens = response;
                })
                .error((message) => {
                    this.$window.alert(message);
                });
        }

        excluir(id: string) {
            if (!this.$window.confirm('Confirma a exclusão do bem id: ' + id + '?')) {
                return;
            }
            this.$http.delete('/api/v1/bens/' + id)
                .success((response) => {
                    this.$window.alert('Bem excluído com sucesso!');
                    this.listar();
                })
                .error((message) => {
                    this.$window.alert(message);
                });
        }
    }

    angular.module('cadpat')
        .component('homeBens', {
            templateUrl: 'app_ts/components/home-bens.component.html',
            controller: HomeBensController,
            controllerAs: 'vm',
        });
}