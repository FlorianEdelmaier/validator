'use strict';
const expect = require('expect');
const common = require('./../lib/common');

describe('Common module', () => {
    describe('isDefinedObject function', () => {
        it('should return true for given object', () => {
            const obj = {};
            expect(common.isDefinedObject(obj)).toEqual(true);
        });
        it('should return true for given nested object', () => {
            const obj = { test: {} };
            expect(common.isDefinedObject(obj.test)).toEqual(true);
        });
        it('should return false for given function', () => {
            const func = () => {};
            expect(common.isDefinedObject(func)).toEqual(false);
        });
        it('should return false for given string', () => {
            expect(common.isDefinedObject('abc')).toEqual(false);
        });
        it('should return false for given number', () => {
            expect(common.isDefinedObject(1)).toEqual(false);
        });
    });
});
