# combine-validators

[![Travis](https://img.shields.io/travis/FlorianEdelmaier/validator.svg)](https://travis-ci.org/FlorianEdelmaier/validator)
[![Codecov](https://img.shields.io/codecov/c/github/FlorianEdelmaier/validator.svg)](https://codecov.io/github/FlorianEdelmaier/validator)
[![npm](https://img.shields.io/npm/v/npm.svg?maxAge=2592000)](http://npm.im/combine-validators)
[![downloads](https://img.shields.io/npm/dm/starwars-names.svg?style=flat-square)](http://npm-stat.com/charts.html?package=combine-validators)
[![MIT License](https://img.shields.io/npm/l/starwars-names.svg?style=flat-square)](http://opensource.org/licenses/MIT)

A Validator gives [validator.js](https://www.npmjs.com/package/validator) string validators a common context and allows composition.

```javascript
const Validator = require('combine-validators');
const validations = Validator.validations;

const v = new Validator();
v.check(validations.isMandatory, validations.isEmail)(req.body, 'email', 'Email not valid');
v.check(validations.isOptional, validations.isIn('a', 'b', 'c'))(req.body, 'type', 'Type not valid');
v.check(validations.isMandatory, validations.isMongoId)(req.body, '_id', 'Id not valid');
if(v.hasErrors()) console.log('Validation rejected');
```
