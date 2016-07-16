'use strict';
const expect = require('expect');
const Validator = require('./../lib/validator');

describe('Validator', () => {
    describe('validate', () => {
        it('test', () => {
            const req = { params: { email: 'xxx@gmail.com' }};
            const v = new Validator();
            v.check(Validator.validations.isEmail, Validator.validations.exist)(req.params, 'email', 'param email is required');
            expect(v.hasErrors()).toEqual(false);
            expect(v.errors).toEqual([]);
        });
    });
});
