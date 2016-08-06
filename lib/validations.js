'use strict';
const validator = require('validator');
const common = require('./common');

function isMandatory(str) {
    return str != null && !validator.isNull(str);
}

/**
 * Marker function to execute consecutive validations without
 * exception if given string does not exist
 */
function isOptional() {}

function isIn(array) {
    return str => {
        return validator.isIn(str, array);
    }
}

function isLength(min, max) {
    return str => {
        return validator.isLength(str, { min: min, max: max });
    }
}

const validations = {
    isMandatory: isMandatory,
    isOptional: isOptional,
    isAfter: validator.isAfter,
    isBefore: validator.isBefore,
    isBoolean: validator.isBoolean,
    isCreditCard: validator.isCreditCard,
    isDate: validator.isDate,
    isDecimal: validator.isDecimal,
    isEmail: validator.isEmail,
    isIP: validator.isIP,
    isIn: isIn,
    isInt: validator.isInt,
    isJSON: validator.isJSON,
    isLength: isLength,
    isLowercase: validator.isLowercase,
    isMobilePhone: validator.isMobilePhone,
    isMongoId: validator.isMongoId,
    isNull: validator.isNull,
    isNumeric: validator.isNumeric,
    isUppercase: validator.isUppercase,
    isURL: validator.isURL,
};

module.exports = validations;
