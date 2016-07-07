var cadpat;
(function (cadpat) {
    'use strict';
    angular.module('cadpat', [
        'ngRoute',
        'ui.bootstrap',
        'cadpatFilters',
        'cadpatServices',
        'alertaControllers',
        'alertaServices',
        'bemControllers'
    ]);
})(cadpat || (cadpat = {}));
