namespace cadpat.bem {
    'use strict';

    export interface IBem {
        _id: string;
        urlFoto: string;
        descricao: string;
    }

    interface IRouteParamsServiceBem extends ng.route.IRouteParamsService {
        id: string;
    }

    export class AlterarController {
        static $inject: Array<string> =
            ['BemResource', '$location', '$routeParams', '$window'];
        bem: IBem;

        constructor(private BemResource: cadpat.IBemResourceClass,
                    private $location: ng.ILocationService,
                    private $routeParams: IRouteParamsServiceBem,
                    private $window: ng.IWindowService) {

            this.BemResource.get({
                id: this.$routeParams.id,
            }, (bem: IBem) => {
                this.bem = bem;
            }, (error: string) => {
                this.$window.alert(error);
            });
        }

        ////////////////

        salvar() {
            this.BemResource.update({
                    id: this.$routeParams.id,
                }, this.bem, () => {
                this.$window.alert('Bem alterado com sucesso');
                this.$location.path('/bens');
            }, (error) => {
                this.$window.alert(error);
            });
        }
    }

    export class IncluirController {
        static $inject: Array<string> = ['BemResource', '$location', '$window'];
        bem: IBem;

        constructor(private BemResource: cadpat.IBemResourceClass,
                    private $location: ng.ILocationService,
                    private $window: ng.IWindowService) {
        }

        ////////////////

        salvar() {
            this.BemResource.save(
                this.bem,
                () => {
                    this.$window.alert('Bem incluído com sucesso');
                    this.$location.path('/bens');
                },
                (error) => {
                    this.$window.alert(error);
                }
            );
        }
    }

    export class DetalheController {
        static $inject: Array<string> = ['BemResource', '$routeParams', '$window'];
        bem: IBem;

        ////////////////

        constructor(private BemResource: cadpat.IBemResourceClass,
                    private $routeParams: IRouteParamsServiceBem,
                    private $window: ng.IWindowService) {

            BemResource.get(
                {
                    id: $routeParams.id,
                },
                (bem: IBem) => {
                    this.bem = bem;
                },
                (error) => {
                    this.$window.alert(error);
                }
            );
        }
    }

    export class ListagemController {
        static $inject: Array<string> = ['BemResource', '$window'];
        bens: IBem[];
        nomePessoa: string;

        constructor(private BemResource: cadpat.IBemResourceClass,
                    private $window: ng.IWindowService) {
            this.nomePessoa = 'Chico Buarque';
            this.listar();
        }

        ////////////////

        listar() {
            this.BemResource.query(
                (bens: IBem[]) => {
                    this.bens = bens;
                },
                (error) => {
                    this.$window.alert(error);
                }
            );
        }

        excluir(id: string) {
            if (!this.$window.confirm(`Confirma a exclusão do bem id: ${id}?`)) {
                return;
            }
            this.BemResource.delete({
                    id: id
                },
                () => {
                    this.$window.alert('Bem excluído com sucesso!');
                    this.listar();
                },
                (error) => {
                    this.$window.alert(error);
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
