'use strict';
const expect = require('expect');
const validations = require('./../lib/validations');

describe('validators', () => {
    describe('exists', () => {
        it('should return false if input null', () => {
            expect(validations.exists(null)).toEqual(false);
        });
        it('should return false if input undefined', () => {
            expect(validations.exists(undefined)).toEqual(false);
        });
        it('should return false if input is empty string', () => {
            expect(validations.exists('')).toEqual(false);
        });
        it('should return true if input is null string', () => {
            expect(validations.exists('null')).toEqual(true);
        });
        it('should return false if property does not exist', () => {
            const test = { };
            expect(validations.exists(test.test)).toEqual(false);
        });
        it('should return true if string is given', () => {
            expect(validations.exists('abc')).toEqual(true);
        });
    });
    describe('isIn', () => {
        it('should be implemented as currying function', () => {
            const isIn = validations.isIn(['a', 'b', 'c']);
            expect(isIn).toBeA('function');
        });
        it('should return true if string is in given array of strings', () => {
            const isIn = validations.isIn(['a', 'b', 'c']);
            expect(isIn('a')).toEqual(true);
        });
        it('should return false if string is not in given array of strings', () => {
            const isIn = validations.isIn(['a', 'b', 'c']);
            expect(isIn('z')).toEqual(false);
        });
    });
})
