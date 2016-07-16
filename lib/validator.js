'use strict';
const validator = require('validator');
const validations = require('./validations');

const validationsKeys = Object.keys(validations);

const isValidationFunction = validator =>
    typeof validator === 'function' &&
    validationsKeys.indexOf(validator) > 1;

const isDefined = obj => typeof obj !== 'undefined';

class ValidationContext {
    constructor() {
        this.errors = [];
    }
    hasErrors() {
        return this.errors.length > 0;
    }
    addError(obj, propertyString, message) {
        this.errors.push({
            value: `${obj}.${propertyString}`,
            message: validationMessage
        });
    }
    check() {
        const validators = Array.prototype.slice.call(arguments);
        const validValidators = validators.filter(val => isValidationFunction);

        return (obj, propertyString, validationMessage) => {
            if(!isDefined(obj)) throw Error(`${obj.name} is not defined`);
            validValidators.map(validator => {
                const result = validator(obj[propertyString]);
                if(!result) this.addError(obj, propertyString, validationMessage);
            });
        }
    }
}

module.exports = ValidationContext;
module.exports.validations = validations;
