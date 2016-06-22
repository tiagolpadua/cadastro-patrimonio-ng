var cadpat;
(function (cadpat) {
    'use strict';
    angular.module('cadpat')
        .directive(seHeader);
    seHeader.$inject = [];
    function seHeader() {
        var directive = {
            template: '',
            restrict: 'E'
        };
        return directive;
    }
})(cadpat || (cadpat = {}));
