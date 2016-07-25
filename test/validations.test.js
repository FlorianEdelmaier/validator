'use strict';
const expect = require('expect');
const validations = require('./../lib/validations');

describe('validators', () => {
    describe('isMandatory', () => {
        it('should return false if input null', () => {
            expect(validations.isMandatory(null)).toEqual(false);
        });
        it('should return false if input undefined', () => {
            expect(validations.isMandatory(undefined)).toEqual(false);
        });
        it('should return false if input is empty string', () => {
            expect(validations.isMandatory('')).toEqual(false);
        });
        it('should return true if input is null string', () => {
            expect(validations.isMandatory('null')).toEqual(true);
        });
        it('should return false if property does not exist', () => {
            const test = { };
            expect(validations.isMandatory(test.test)).toEqual(false);
        });
        it('should return true if string is given', () => {
            expect(validations.isMandatory('abc')).toEqual(true);
        });
    });
    describe('isOptional', () => {
        it('should be a function with name "isOptional"', () => {
            expect(validations.isOptional).toBeA('function');
            expect(validations.isOptional.name).toEqual('isOptional');
        });
        it('should return nothing', () => {
            const result = validations.isOptional();
            expect(result).toEqual(null);
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
