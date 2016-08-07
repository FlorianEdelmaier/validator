'use strict';
const expect = require('expect');
const Validator = require('./../lib/validator');
const validations = Validator.validations;

describe('Validator', () => {
    describe('check', () => {
        it('should throw exception if given object does not exist', () => {
            const req = { };
            const v = new Validator();
            const check = v.check(validations.isMandatory);
            let error;
            try {
                check(req.params, 'test', 'test');
            } catch(err) { error = err; }
            expect(error).toEqual(new Error('Given object is not defined'));
            // expect(v.check(req.params, 'test', 'test')).toThrow(new Error('Given object is not defined'));
        });
        it('should generate no validation errors when input valid', () => {
            const req = { body: { email: 'xxx@gmail.com' } };
            const v = new Validator();
            v.check(validations.isMandatory, validations.isEmail)(req.body, 'email', 'email is required');
            expect(v.hasErrors()).toEqual(false);
            expect(v.errors).toEqual([]);
        });
        it('should generate validations errors when validators rejected', () => {
            const req = { body: { email: 'abc_gmail.com' } };
            const v = new Validator();
            v.check(validations.isMandatory, validations.isEmail)(req.body, 'email', 'email is required');
            expect(v.hasErrors()).toEqual(true);
            expect(v.errors.length).toEqual(1);
            expect(v.errors[0].message).toEqual('email is required');
            expect(v.errors[0].value).toEqual('email');
        });
        it('should omit validators which are not functions', () => {
            const test = { test: 'abc' };
            const v = new Validator();
            v.check(validations.isMandatory, {})(test, 'test', 'test is required');
            expect(v.hasErrors()).toEqual(false);
        });
        // it('should omit validators which are not provided by package', () => {
        //     const test = { test: 'abc' };
        //     const v = new Validator();
        //     v.check(validations.isMandatory, str => str === 'xyz')(test, 'test', 'test is required');
        //     expect(v.hasErrors()).toEqual(false);
        // });
        it('should omit validators if check is marked as optional', () => {
            const req = { params: {} };
            const v = new Validator();
            v.check(validations.isOptional, validations.isEmail)(req.params, 'test', 'test');
            expect(v.hasErrors()).toEqual(false);
        });
        it('should evaluate validations if check is marked as optional and property exists', () => {
            const req = { params: { email: 'abc' } };
            const v = new Validator();
            v.check(validations.isOptional, validations.isEmail)(req.params, 'email', 'email should be valid');
            expect(v.hasErrors()).toEqual(true);
            expect(v.errors[0].message).toEqual('email should be valid');
        });
        it('should omit following validations if isMandatory already failed', () => {
            const req = { body: { test: 'xyz' } };
            const v = new Validator();
            v.check(validations.isMandatory, validations.isEmail)(req.body, 'email', 'email should be valid');
            expect(v.hasErrors()).toEqual(true);
            expect(v.errors.length).toEqual(1);
            expect(v.errors[0].message).toEqual('Given property is not defined');
        });
        it('should create "not defined" error if validation checks not existing property and isMandatory not enforced', () => {
            const req = { body: { test: 'xyz' } };
            const v = new Validator();
            v.check(validations.isEmail)(req.body, 'email', 'email should be valid');
            expect(v.hasErrors()).toEqual(true);
            expect(v.errors.length).toEqual(1);
            expect(v.errors[0].message).toEqual('Given property is not defined');
        });
        it('should create no error if isIn validation is fullfilled', () => {
            const req = { body: { type: 'a' } };
            const v = new Validator();
            v.check(validations.isIn(['a', 'b']))(req.body, 'type', 'type is not valid');
            expect(v.hasErrors()).toEqual(false);
            expect(v.errors.length).toEqual(0);
        });
        it('should create error if isIn validation is rejected', () => {
            const req = { body: { type: 'z' } };
            const v = new Validator();
            v.check(validations.isIn(['a', 'b']))(req.body, 'type', 'type is not valid');
            expect(v.hasErrors()).toEqual(true);
        });
    });
});
