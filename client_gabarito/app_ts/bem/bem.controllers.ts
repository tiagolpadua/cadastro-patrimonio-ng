namespace cadpat.bem {
    'use strict';

    export interface IBem {
        _id: string;
        urlFoto: string;
        descricao: string;
    }

    export class ListagemController {
        static $inject: Array<string> = ['BemResource', '$window', 'alertaService'];
        bens: IBem[];
        nomePessoa: string;

        constructor(private BemResource: cadpat.IBemResourceClass,
                    private $window: ng.IWindowService,
                    private alertaService: cadpat.alerta.AlertaService) {
            this.nomePessoa = 'Chico Buarque';
            this.listar();
        }

        ////////////////

        listar() {
            this.BemResource.query(
                (bens: IBem[]) => {
                    this.bens = bens;
                },
                (error: string) => {
                    this.alertaService.add('danger', error);
                }
            );
        }

        excluir(id: string) {
            if (!this.$window.confirm(`Confirma a exclusão do bem id: ${id}?`)) {
                return;
            }
            this.BemResource.delete(
                {
                    id: id
                },
                () => {
                    this.alertaService.add('success', 'Bem excluído com sucesso');
                    this.listar();
                },
                (error: string) => {
                    this.alertaService.add('danger', error);
                }
            );
        }
    }

    interface IRouteParamsServiceBem extends ng.route.IRouteParamsService {
        id: string;
    }

    export class DetalheController {
        static $inject: Array<string> = ['BemResource', '$routeParams', 'alertaService'];
        bem: IBem;

        ////////////////

        constructor(private BemResource: cadpat.IBemResourceClass,
                    private $routeParams: IRouteParamsServiceBem,
                    private alertaService: cadpat.alerta.AlertaService) {

            BemResource.get(
                {
                    id: $routeParams.id,
                },
                (bem: IBem) => {
                    this.bem = bem;
                },
                (error: string) => {
                    this.alertaService.add('danger', error);
                }
            );
        }
    }

    export class IncluirController {
        static $inject: Array<string> = ['BemResource', '$location', 'alertaService'];
        bem: IBem;

        constructor(private BemResource: cadpat.IBemResourceClass,
                    private $location: ng.ILocationService,
                    private alertaService: cadpat.alerta.AlertaService) {
        }

        ////////////////

        salvar() {
            this.BemResource.save(
                this.bem,
                () => {
                    this.alertaService.add('success', 'Bem incluído com sucesso');
                    this.$location.path('/bens');
                },
                (error: string) => {
                    this.alertaService.add('danger', error);
                }
            );
        }
    }

    export class AlterarController {
        static $inject: Array<string> =
            ['BemResource', '$location', '$routeParams', 'alertaService'];
        bem: IBem;

        constructor(private BemResource: cadpat.IBemResourceClass,
                    private $location: ng.ILocationService,
                    private $routeParams: IRouteParamsServiceBem,
                    private alertaService: cadpat.alerta.AlertaService) {

            this.BemResource.get(
                {
                    id: this.$routeParams.id,
                },
                (bem: IBem) => {
                    this.bem = bem;
                },
                (error: string) => {
                    this.alertaService.add('danger', error);
                }
            );
        }

        ////////////////

        salvar() {
            this.BemResource.update(
                {
                    id: this.$routeParams.id,
                },
                this.bem,
                () => {
                    this.alertaService.add('success', 'Bem alterado com sucesso');
                    this.$location.path('/bens');
                },
                (error: string) => {
                    this.alertaService.add('danger', error);
                }
            );
        }
    }

    angular
        .module('bemControllers', [])
        .controller('ListagemController', ListagemController)
        .controller('DetalheController', DetalheController)
        .controller('IncluirController', IncluirController)
        .controller('AlterarController', AlterarController);

}
