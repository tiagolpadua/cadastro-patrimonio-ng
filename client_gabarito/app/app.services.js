(function(angular, undefined) {
    'use strict';

    angular
        .module('cadpatServices', [])
        .factory('bemService', bemService);

    bemService.$inject = ['$resource'];

    function bemService($resource) {
        return $resource('/api/v1/bens/:id', null, {
            update: {
                method: 'PUT'
            },
        });
    }
})(angular);
