'use strict';

const isDefinedObject = obj => typeof obj === 'object';

const negate = predicateFunc => {
    return () => !predicateFunc.apply(this, arguments);
}

module.exports.isDefinedObject = isDefinedObject;
module.exports.negate = negate;
