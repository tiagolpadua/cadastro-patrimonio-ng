var cadpat;
(function (cadpat) {
    var bem;
    (function (bem) {
        'use strict';
        var AlterarController = (function () {
            function AlterarController($http, $location, $routeParams, alertaService) {
                var _this = this;
                this.$http = $http;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.alertaService = alertaService;
                $http.get('/api/v1/bens/' + $routeParams.id)
                    .success(function (response) {
                    _this.bem = response;
                })
                    .error(function (message) {
                    _this.alertaService.alertas.push({ tipo: 'danger', msg: message });
                });
            }
            ////////////////
            AlterarController.prototype.salvar = function () {
                var _this = this;
                this.$http.put('/api/v1/bens/' + this.bem._id, this.bem)
                    .success(function (response) {
                    _this.alertaService.alertas.push({ tipo: 'success', msg: 'Bem alterado com sucesso' });
                    _this.$location.path('/bens');
                })
                    .error(function (message) {
                    _this.alertaService.alertas.push({ tipo: 'danger', msg: message });
                });
            };
            AlterarController.$inject = ['$http', '$location', '$routeParams', 'alertaService'];
            return AlterarController;
        }());
        var IncluirController = (function () {
            function IncluirController($http, $location, alertaService) {
                this.$http = $http;
                this.$location = $location;
                this.alertaService = alertaService;
            }
            ////////////////
            IncluirController.prototype.salvar = function () {
                var _this = this;
                this.$http.post('/api/v1/bens', this.bem)
                    .success(function (response) {
                    _this.alertaService.alertas.push({ tipo: 'success', msg: 'Bem incluído com sucesso' });
                    _this.$location.path('/bens');
                })
                    .error(function (message) {
                    _this.alertaService.alertas.push({ tipo: 'danger', msg: message });
                });
            };
            IncluirController.$inject = ['$http', '$location', 'alertaService'];
            return IncluirController;
        }());
        var DetalheController = (function () {
            ////////////////
            function DetalheController($http, $routeParams, alertaService) {
                var _this = this;
                this.alertaService = alertaService;
                $http.get('/api/v1/bens/' + $routeParams.id)
                    .success(function (response) {
                    _this.bem = response;
                })
                    .error(function (message) {
                    _this.alertaService.alertas.push({ tipo: 'danger', msg: message });
                });
            }
            DetalheController.$inject = ['$http', '$routeParams', 'alertaService'];
            return DetalheController;
        }());
        var ListagemController = (function () {
            function ListagemController($http, $window) {
                this.$http = $http;
                this.$window = $window;
                this.nomePessoa = 'Chico Buarque';
                this.listar();
            }
            ////////////////
            ListagemController.prototype.listar = function () {
                var _this = this;
                this.$http.get('/api/v1/bens')
                    .success(function (response) {
                    _this.bens = response;
                })
                    .error(function (message) {
                    _this.$window.alert(message);
                });
            };
            ListagemController.prototype.excluir = function (id) {
                var _this = this;
                if (!this.$window.confirm('Confirma a exclusão do bem id: ' + id + '?')) {
                    return;
                }
                this.$http.delete('/api/v1/bens/' + id)
                    .success(function (response) {
                    _this.$window.alert('Bem excluído com sucesso!');
                    _this.listar();
                })
                    .error(function (message) {
                    _this.$window.alert(message);
                });
            };
            ListagemController.$inject = ['$http', '$window'];
            return ListagemController;
        }());
        angular
            .module('bemControllers', [])
            .controller('ListagemController', ListagemController)
            .controller('DetalheController', DetalheController)
            .controller('IncluirController', IncluirController)
            .controller('AlterarController', AlterarController);
    })(bem = cadpat.bem || (cadpat.bem = {}));
})(cadpat || (cadpat = {}));
