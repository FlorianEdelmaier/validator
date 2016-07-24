'use strict';
const validator = require('validator');
const common = require('./common');

function exists(str) {
    return str != null && !validator.isNull(str);
};

function isIn(array) {
    return str => validator.isIn(str, array);
};

const validations = {
    exists: exists,
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
    isLowercase: validator.isLowercase,
    isMobilePhone: validator.isMobilePhone,
    isMongoId: validator.isMongoId,
    isNull: validator.isNull,
    isNumeric: validator.isNumeric,
    isUppercase: validator.isUppercase
};

module.exports = validations;
