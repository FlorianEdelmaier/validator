'use strict';
const validator = require('validator');
const validations = require('./validations');
const common = require('./common');

const validationsKeys = Object.keys(validations);

const isValidationFunction = validator => {
    return typeof validator === 'function' &&
    validationsKeys.indexOf(validator.name) >= 0 };

const isOptional = validator => validator.name === 'isOptional';

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
        let isOptionalCheck = false;
        const validators = Array.prototype.slice.call(arguments);
        const validValidators = validators.filter(val => isValidationFunction(val));
        return (obj, propertyString, validationMessage) => {
            if(!common.isDefinedObject(obj)) throw new Error('Given object is not defined');
            validValidators.map(validator => {
                if(isOptional(validator)) { isOptionalCheck = true; }
                const str2check = obj[propertyString];
                if(!str2check && !isOptionalCheck) throw new Error('Given property is not defined');
                if((!str2check && isOptionalCheck) || isOptional(validator)) return;
                const result = validator(str2check);
                if(!result) this.addError(propertyString, validationMessage);
            });
        }
    }
}

module.exports = ValidationContext;
module.exports.validations = validations;
