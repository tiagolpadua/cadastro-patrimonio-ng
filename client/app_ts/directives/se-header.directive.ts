namespace cadpat {
    'use strict';

    angular.module('cadpat')
        .directive(seHeader);

    seHeader.$inject = [];
    function seHeader() {
        let directive: ng.IDirective = {
            template: '',
            restrict: 'E'
        };

        return directive;
    }
}
