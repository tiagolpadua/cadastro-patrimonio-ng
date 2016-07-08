namespace cadpat {
    'use strict';

    angular.module('cadpat')
        .directive('acModalBox', acModalBox);

    interface IModalScope extends ng.IScope {
        visible: any;
    }

    interface IModalBox extends ng.IAugmentedJQuery {
        modalBox: (params?: Object) => void;
    }

    acModalBox.$inject = ['$rootScope', '$timeout'];
    function acModalBox($rootScope: ng.IRootScopeService,
                        $timeout: ng.ITimeoutService) {
        let directive: ng.IDirective = {
            template: '<div class="modalBox" ng-transclude></div>',
            link: (scope: IModalScope, element: ng.IAugmentedJQuery) => {
                if (scope.visible) {
                    showModal();
                }

                scope.$watch('visible', () => {
                    if (scope.visible) {
                        showModal();
                    }
                });

                function showModal() {
                    $rootScope.$broadcast('showModal', new Date());
                    (<IModalBox>element.children().first()).modalBox({
                        onClose: () => {
                            $timeout(() => {
                                scope.visible = false;
                            });
                        }
                    });
                }
            },
            scope: {
                visible: '='
            },
            transclude: true,
            restrict: 'E'
        };

        return directive;
    }
}
