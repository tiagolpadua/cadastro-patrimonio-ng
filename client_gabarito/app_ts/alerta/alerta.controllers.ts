namespace cadpat.alerta {
    'use strict';

    class AlertaController {
        static $inject = ['alertaService'];
        alertas: cadpat.alerta.IAlerta[];

        constructor(private alertaService: cadpat.alerta.AlertaService) {
            this.alertas = alertaService.alertas;
        }

        ////////////////

        fecharAlerta(index) {
            this.alertas.splice(index, 1);
        }
    }

    angular
        .module('alertaControllers', ['alertaServices'])
        .controller('AlertaController', AlertaController);
}

