'use strict';
const validator = require('validator');

class ValidationItem {
    constructor(obj, propertyString, validationMessage) {
        this.obj = obj;
        this.propertyString = propertyString;
        this.validationMessage = validationMessage;
        this.errorMessage = undefined;
        this.isError = false;
    }

    setError(errorMessage) {
        this.errorMessage = errorMessage;
        this.isError = true;
    }

    hasError() {
        return this.isError;
    }

    hasValue() {
        if(this.hasError()) return this;
        const validation = this.obj[`${this.propertyString}`] !== undefined;
        if(!validation) {
            this.setError(`${this.obj} has no property ${this.propertyString}`);
        }
        return this;
    }

    isUrl() {
        if(this.hasError()) return this;
        let x = this.obj[this.propertyString];
        const validation = validator.isURL(this.obj[this.propertyString]);
        if(!validation) {
            this.setError(`${this.propertyString} is not an URL`);
        }
        return this;
    }
}

module.exports = ValidationItem;
