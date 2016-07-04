(function() {
'use strict';

angular
    .module('cadpatFilters', [])
    .filter('maiusculo', maiusculo);

maiusculo.$inject = [];

function maiusculo() {
    return function(input) {
        return input.toUpperCase();
    };
}
})();

