'use strict';

describe('testes de cadpatFilters', () => {

    beforeEach(angular.mock.module('cadpatFilters'));

    describe('maiusculo', () => {

        it('Deve converter corretamente para maiusculo',
            inject((maiusculoFilter) => {
                expect(maiusculoFilter('foo')).toBe('FOO');
            })
        );

        it('Deve suportar strings nulas',
            inject((maiusculoFilter) => {
                expect(maiusculoFilter(null)).toBe('');
            })
        );
    });
});
