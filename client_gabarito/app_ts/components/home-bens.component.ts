namespace cadpat {
    'use strict';

    angular.module('cadpat')
        .component('homeBens', {
            templateUrl: 'app_ts/components/home-bens.component.html',
            controller: cadpat.bem.ListagemController,
            controllerAs: 'vm',
        });
}
