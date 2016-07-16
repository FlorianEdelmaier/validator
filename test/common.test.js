'use strict';
const expect = require('expect');
const common = require('./../lib/common');

describe('Common module', () => {
    describe('isDefinedObject function', () => {
        describe('for given object', () => {
            it('should return true', () => {
                const obj = {};
                expect(common.isDefinedObject(obj)).toEqual(true);
            });
        });
        describe('for given nested object', () => {
            it('should return true', () => {
                const obj = { test: {} };
                expect(common.isDefinedObject(obj.test)).toEqual(true);
            });
        });
        describe('for given function', () => {
            it('should return false', () => {
                const func = () => {};
                expect(common.isDefinedObject(func)).toEqual(false);
            });
        });
        describe('for given string', () => {
            it('should return false', () => {
                expect(common.isDefinedObject('abc')).toEqual(false);
            });
        });
        describe('for given number', () => {
            it('should return false', () => {
                expect(common.isDefinedObject(1)).toEqual(false);
            });
        });
    });
    describe('negate function', () => {
        describe('for boolean return values', () => {
            it('should return false instead of true', () => {
                const func = str => true;
                expect(common.negate(func)('abc')).toEqual(false);
            });
            it('should return true instead of false', () => {
                const func = str => false;
                expect(common.negate(func)('abc')).toEqual(true);
            });
        });
        describe('for object return values', () => {
            it('should return true', () => {
                const func = () => { test: 1 };
                expect(common.negate(func)()).toEqual(true);
            });
        });
    });
});
