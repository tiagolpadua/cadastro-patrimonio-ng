namespace cadpat.alerta {
    'use strict';

    type TipoAlerta = 'danger' | 'success';

    export interface IAlerta {
        tipo: TipoAlerta;
        msg: string;
    }

    export class AlertaService {
        alertas: IAlerta[] = [];

        add(tipo: TipoAlerta, msg: string) {
            this.alertas.push({
                tipo: tipo,
                msg: msg
            });
        }
    }

    angular
        .module('alertaServices', [])
        .service('alertaService', AlertaService);
}
