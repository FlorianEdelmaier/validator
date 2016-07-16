'use strict';
const validator = require('validator');
const common = require('./common');

const exists = str => !validator.isNull(str);

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
    isIn: validator.isIn,
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
