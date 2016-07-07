var cadpat;
(function (cadpat) {
    var alerta;
    (function (alerta) {
        'use strict';
        var AlertaService = (function () {
            function AlertaService() {
                this.alertas = [];
            }
            AlertaService.prototype.add = function (tipo, msg) {
                this.alertas.push({
                    tipo: tipo,
                    msg: msg
                });
            };
            return AlertaService;
        }());
        alerta.AlertaService = AlertaService;
        angular
            .module('alertaServices', [])
            .service('alertaService', AlertaService);
    })(alerta = cadpat.alerta || (cadpat.alerta = {}));
})(cadpat || (cadpat = {}));
