namespace cadpat {
    'use strict';

    maiusculo.$inject = [];
    function maiusculo() {
        return (input: string) => {
            return (input || '').toUpperCase();
        };
    }

    angular
        .module('cadpatFilters', [])
        .filter('maiusculo', maiusculo);
}
