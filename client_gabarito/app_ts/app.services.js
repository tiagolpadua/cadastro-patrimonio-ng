var cadpat;
(function (cadpat) {
    'use strict';
    BemResource.$inject = ['$resource'];
    function BemResource($resource) {
        return $resource('/api/v1/bens/:id', null, {
            update: {
                method: 'PUT'
            }
        });
    }
    angular
        .module('cadpatServices', ['ngResource'])
        .factory('BemResource', BemResource);
})(cadpat || (cadpat = {}));
