var cadpat;
(function (cadpat) {
    var bem;
    (function (bem) {
        'use strict';
        var AlterarController = (function () {
            function AlterarController($http, $location, $routeParams, $window) {
                var _this = this;
                this.$http = $http;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.$window = $window;
                $http.get('/api/v1/bens/' + $routeParams.id)
                    .success(function (response) {
                    _this.bem = response;
                })
                    .error(function (message) {
                    _this.$window.alert(message);
                });
            }
            ////////////////
            AlterarController.prototype.salvar = function () {
                var _this = this;
                this.$http.put('/api/v1/bens/' + this.bem._id, this.bem)
                    .success(function (response) {
                    _this.$window.alert('Bem alterado com sucesso');
                    _this.$location.path('/bens');
                })
                    .error(function (message) {
                    _this.$window.alert(message);
                });
            };
            AlterarController.$inject = ['$http', '$location', '$routeParams', '$window'];
            return AlterarController;
        }());
        var IncluirController = (function () {
            function IncluirController($http, $location, $window) {
                this.$http = $http;
                this.$location = $location;
                this.$window = $window;
            }
            ////////////////
            IncluirController.prototype.salvar = function () {
                var _this = this;
                this.$http.post('/api/v1/bens', this.bem)
                    .success(function (response) {
                    _this.$window.alert('Bem incluído com sucesso');
                    _this.$location.path('/bens');
                })
                    .error(function (message) {
                    _this.$window.alert(message);
                });
            };
            IncluirController.$inject = ['$http', '$location', '$window'];
            return IncluirController;
        }());
        var DetalheController = (function () {
            ////////////////
            function DetalheController($http, $routeParams, $window) {
                var _this = this;
                $http.get('/api/v1/bens/' + $routeParams.id)
                    .success(function (response) {
                    _this.bem = response;
                })
                    .error(function (message) {
                    $window.alert(message);
                });
            }
            DetalheController.$inject = ['$http', '$routeParams', '$window'];
            return DetalheController;
        }());
        var ListagemController = (function () {
            function ListagemController($http, $window) {
                this.$http = $http;
                this.$window = $window;
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
