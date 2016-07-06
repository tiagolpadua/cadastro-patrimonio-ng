var cadpat;
(function (cadpat) {
    var bem;
    (function (bem_1) {
        'use strict';
        var AlterarController = (function () {
            function AlterarController(BemResource, $location, $routeParams, $window) {
                var _this = this;
                this.BemResource = BemResource;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.$window = $window;
                this.BemResource.get({
                    id: this.$routeParams.id,
                }, function (bem) {
                    _this.bem = bem;
                }, function (error) {
                    _this.$window.alert(error);
                });
            }
            ////////////////
            AlterarController.prototype.salvar = function () {
                var _this = this;
                this.BemResource.update({
                    id: this.$routeParams.id,
                }, this.bem, function () {
                    _this.$window.alert('Bem alterado com sucesso');
                    _this.$location.path('/bens');
                }, function (error) {
                    _this.$window.alert(error);
                });
            };
            AlterarController.$inject = ['BemResource', '$location', '$routeParams', '$window'];
            return AlterarController;
        }());
        bem_1.AlterarController = AlterarController;
        var IncluirController = (function () {
            function IncluirController(BemResource, $location, $window) {
                this.BemResource = BemResource;
                this.$location = $location;
                this.$window = $window;
            }
            ////////////////
            IncluirController.prototype.salvar = function () {
                var _this = this;
                this.BemResource.save(this.bem, function () {
                    _this.$window.alert('Bem incluído com sucesso');
                    _this.$location.path('/bens');
                }, function (error) {
                    _this.$window.alert(error);
                });
            };
            IncluirController.$inject = ['BemResource', '$location', '$window'];
            return IncluirController;
        }());
        bem_1.IncluirController = IncluirController;
        var DetalheController = (function () {
            ////////////////
            function DetalheController(BemResource, $routeParams, $window) {
                var _this = this;
                this.BemResource = BemResource;
                this.$routeParams = $routeParams;
                this.$window = $window;
                BemResource.get({
                    id: $routeParams.id,
                }, function (bem) {
                    _this.bem = bem;
                }, function (error) {
                    _this.$window.alert(error);
                });
            }
            DetalheController.$inject = ['BemResource', '$routeParams', '$window'];
            return DetalheController;
        }());
        bem_1.DetalheController = DetalheController;
        var ListagemController = (function () {
            function ListagemController(BemResource, $window) {
                this.BemResource = BemResource;
                this.$window = $window;
                this.nomePessoa = 'Chico Buarque';
                this.listar();
            }
            ////////////////
            ListagemController.prototype.listar = function () {
                var _this = this;
                this.BemResource.query(function (bens) {
                    _this.bens = bens;
                }, function (error) {
                    _this.$window.alert(error);
                });
            };
            ListagemController.prototype.excluir = function (id) {
                var _this = this;
                if (!this.$window.confirm("Confirma a exclus\u00E3o do bem id: " + id + "?")) {
                    return;
                }
                this.BemResource.delete({
                    id: id
                }, function () {
                    _this.$window.alert('Bem excluído com sucesso!');
                    _this.listar();
                }, function (error) {
                    _this.$window.alert(error);
                });
            };
            ListagemController.$inject = ['BemResource', '$window'];
            return ListagemController;
        }());
        bem_1.ListagemController = ListagemController;
        angular
            .module('bemControllers', [])
            .controller('ListagemController', ListagemController)
            .controller('DetalheController', DetalheController)
            .controller('IncluirController', IncluirController)
            .controller('AlterarController', AlterarController);
    })(bem = cadpat.bem || (cadpat.bem = {}));
})(cadpat || (cadpat = {}));
