'use strict';
//const validator = require('validator');
const ValidationItem = require('./validationItem');

class ValidationContext {
    constructor() {
        this.validations = [];
    }

    hasErrors() {
        return this.validations.filter(v => v.isError).length > 0;
    }

    validate(obj, propertyString, validationMessage) {
        const vi = new ValidationItem(obj, propertyString, validationMessage);
        this.validations.push(vi);
        return vi;
    }
}

module.exports = ValidationContext;
