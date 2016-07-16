'use strict';
const validator = require('validator');
const validations = require('./validations');
const common = require('./common');

const validationsKeys = Object.keys(validations);

const isValidationFunction = validator =>
    typeof validator === 'function' &&
    validationsKeys.indexOf(validator) > 1;

class ValidationContext {
    constructor() {
        this.errors = [];
    }
    hasErrors() {
        return this.errors.length > 0;
    }
    addError(propertyString, message) {
        this.errors.push({
            value: `${propertyString}`,
            message: message
        });
    }
    check() {
        const validators = Array.prototype.slice.call(arguments);
        const validValidators = validators.filter(val => isValidationFunction);
        return (obj, propertyString, validationMessage) => {
            if(!common.isDefinedObject(obj)) throw new Error('Given object is not defined');
            validValidators.map(validator => {
                const result = validator(obj[propertyString]);
                if(!result) this.addError(propertyString, validationMessage);
            });
        }
    }
}

module.exports = ValidationContext;
module.exports.validations = validations;
