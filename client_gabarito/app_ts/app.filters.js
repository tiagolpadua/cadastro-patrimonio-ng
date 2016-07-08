var cadpat;
(function (cadpat) {
    'use strict';
    maiusculo.$inject = [];
    function maiusculo() {
        return function (input) {
            return (input || '').toUpperCase();
        };
    }
    angular
        .module('cadpatFilters', [])
        .filter('maiusculo', maiusculo);
})(cadpat || (cadpat = {}));
