namespace cadpat.alerta {
    'use strict';

    export type TipoAlerta = 'danger' | 'success';

    export interface IAlerta {
        tipo: TipoAlerta;
        msg: string;
    }

    export class AlertaService {
        alertas: IAlerta[] = [];
    }

    angular
        .module('alertaServices', [])
        .service('alertaService', AlertaService);

}
