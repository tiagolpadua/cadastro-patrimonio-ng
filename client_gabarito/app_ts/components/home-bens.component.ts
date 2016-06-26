namespace cadpat {
    'use strict';

    class HomeBensController {
        static $inject = ['$http', '$window', 'alertaService'];
        bens: cadpat.bem.IBem[];
        nomePessoa: string;

        constructor(private $http: ng.IHttpService,
            private $window: ng.IWindowService,
            private alertaService: cadpat.alerta.AlertaService) {

            this.nomePessoa = 'Barão de Mauá';
            this.listar();
        }

        ////////////////

        listar() {
            this.$http.get('/api/v1/bens')
                .success((response: cadpat.bem.IBem[]) => {
                    this.bens = response;
                })
                .error((message) => {
                    this.alertaService.alertas.push({tipo: 'danger', msg: message });
                });
        }

        excluir(id: string) {
            if (!this.$window.confirm('Confirma a exclusão do bem id: ' + id + '?')) {
                return;
            }
            this.$http.delete('/api/v1/bens/' + id)
                .success((response) => {
                    this.alertaService.alertas.push({tipo: 'success', msg: 'Bem excluído com sucesso' });
                    this.listar();
                })
                .error((message) => {
                    this.alertaService.alertas.push({tipo: 'danger', msg: message });
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