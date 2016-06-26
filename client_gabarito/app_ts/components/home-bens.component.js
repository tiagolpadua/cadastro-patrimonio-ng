var cadpat;
(function (cadpat) {
    'use strict';
    var HomeBensController = (function () {
        function HomeBensController($http, $window, alertaService) {
            this.$http = $http;
            this.$window = $window;
            this.alertaService = alertaService;
            this.nomePessoa = 'Barão de Mauá';
            this.listar();
        }
        ////////////////
        HomeBensController.prototype.listar = function () {
            var _this = this;
            this.$http.get('/api/v1/bens')
                .success(function (response) {
                _this.bens = response;
            })
                .error(function (message) {
                _this.alertaService.alertas.push({ tipo: 'danger', msg: message });
            });
        };
        HomeBensController.prototype.excluir = function (id) {
            var _this = this;
            if (!this.$window.confirm('Confirma a exclusão do bem id: ' + id + '?')) {
                return;
            }
            this.$http.delete('/api/v1/bens/' + id)
                .success(function (response) {
                _this.alertaService.alertas.push({ tipo: 'success', msg: 'Bem excluído com sucesso' });
                _this.listar();
            })
                .error(function (message) {
                _this.alertaService.alertas.push({ tipo: 'danger', msg: message });
            });
        };
        HomeBensController.$inject = ['$http', '$window', 'alertaService'];
        return HomeBensController;
    }());
    angular.module('cadpat')
        .component('homeBens', {
        templateUrl: 'app_ts/components/home-bens.component.html',
        controller: HomeBensController,
        controllerAs: 'vm',
    });
})(cadpat || (cadpat = {}));
