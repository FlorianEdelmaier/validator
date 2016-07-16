'use strict';
const validator = require('validator');
const validations = require('./validations')

class ValidationContext {
    constructor() {
        this.errors = [];
        this.validationKeys = Object.keys(validations);
    }

    hasErrors() {
        return this.errors.length > 0;
    }

    check() {
        const validators = Array.prototype.slice.call(arguments);
        const finalValidators = validators.filter(val =>
            typeof val === 'function' &&
            this.validationKeys.indexOf(val.name) > 1
        );

        return (obj, propertyString, validationMessage) => {
            finalValidators.map(validator => {
                const result = validator(obj[propertyString]);
                if(!result) this.errors.push({
                    value: `${obj}.${propertyString}`,
                    message: validationMessage
                });
            });
        }
  }
}

module.exports = ValidationContext;
module.exports.validations = validations;
