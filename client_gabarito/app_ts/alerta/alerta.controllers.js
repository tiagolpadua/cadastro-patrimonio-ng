var cadpat;
(function (cadpat) {
    var alerta;
    (function (alerta) {
        'use strict';
        var AlertaController = (function () {
            function AlertaController(alertaService) {
                this.alertaService = alertaService;
                this.alertas = alertaService.alertas;
            }
            ////////////////
            AlertaController.prototype.fecharAlerta = function (index) {
                this.alertas.splice(index, 1);
            };
            AlertaController.$inject = ['alertaService'];
            return AlertaController;
        }());
        angular
            .module('alertaControllers', ['alertaServices'])
            .controller('AlertaController', AlertaController);
    })(alerta = cadpat.alerta || (cadpat.alerta = {}));
})(cadpat || (cadpat = {}));
