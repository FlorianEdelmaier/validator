'use strict';
const expect = require('expect');
const Validator = require('./../lib/validator');
const validations = Validator.validations;

describe('Validator', () => {
    describe('check', () => {
        it('should throw exception if given object does not exist', () => {
            const req = { };
            const v = new Validator();
            const check = v.check(validations.exists);
            let error;
            try {
                check(req.params, 'test', 'test');
            } catch(err) { error = err; }
            expect(error).toEqual(new Error('Given object is not defined'));
            //expect(check(req.params, 'test', 'test')).toThrow(new Error('Given object is not defined'));
        });
        it('should generate no validation errors when input valid', () => {
            const req = { body: { email: 'xxx@gmail.com' } };
            const v = new Validator();
            v.check(validations.exists, validations.isEmail)(req.body, 'email', 'email is required');
            expect(v.hasErrors()).toEqual(false);
            expect(v.errors).toEqual([]);
        });
        it('should generate validations errors when validators rejected', () => {
            const req = { body: { email: 'abc_gmail.com' } };
            const v = new Validator();
            v.check(validations.exists, validations.isEmail)(req.body, 'email', 'email is required');
            expect(v.hasErrors()).toEqual(true);
            expect(v.errors.length).toEqual(1);
            expect(v.errors[0].message).toEqual('email is required');
            expect(v.errors[0].value).toEqual('email');
        });
    });
});
