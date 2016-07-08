var cadpat;
(function (cadpat) {
    'use strict';
    angular.module('cadpat')
        .directive('acModalBox', acModalBox);
    acModalBox.$inject = ['$rootScope', '$timeout'];
    function acModalBox($rootScope, $timeout) {
        var directive = {
            template: '<div class="modalBox" ng-transclude></div>',
            link: function (scope, element) {
                if (scope.visible) {
                    showModal();
                }
                scope.$watch('visible', function () {
                    if (scope.visible) {
                        showModal();
                    }
                });
                function showModal() {
                    $rootScope.$broadcast('showModal', new Date());
                    element.children().first().modalBox({
                        onClose: function () {
                            $timeout(function () {
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
})(cadpat || (cadpat = {}));
