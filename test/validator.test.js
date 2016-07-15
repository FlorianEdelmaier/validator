'use strict';
const expect = require('expect');
const Validator = require('./../lib/validator');

describe('Validator', () => {
    describe('validate', () => {
        it('should create new ValidationItem', () => {
            const req = { body: { value: 'abc' }};
            const v = new Validator();
            v.validate(req.body, 'value', 'value should be abc').hasValue();
            expect(v.hasErrors()).toEqual(false);
        });
        it('should create error entry if not match', () => {
            const req = { body: { value: 'abc' }};
            const v = new Validator();
            v.validate(req.body, 'value', 'value should be an url').hasValue().isUrl();
            expect(v.hasErrors()).toEqual(true);
        });
    });
});
