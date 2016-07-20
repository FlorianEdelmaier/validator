# combine-validators

[![Travis](https://img.shields.io/travis/FlorianEdelmaier/combine-validators.svg?style=flat&maxAge=2592000)](https://travis-ci.org/FlorianEdelmaier/combine-validators)
[![Codecov](https://img.shields.io/codecov/c/github/FlorianEdelmaier/combine-validators.svg?maxAge=2592000)](https://codecov.io/github/FlorianEdelmaier/combine-validators)
[![npm](https://img.shields.io/npm/v/npm.svg?maxAge=2592000)](http://npm.im/combine-validators)
[![downloads](https://img.shields.io/npm/dm/starwars-names.svg?style=flat-square)](http://npm-stat.com/charts.html?package=combine-validators)
[![MIT License](https://img.shields.io/npm/l/starwars-names.svg?style=flat-square)](http://opensource.org/licenses/MIT)

```javascript
const Validator = require('combine-validators');
const validations = Validator.validations;

const v = new Validator();
v.check(validations.exists, validations.isEmail)(req.body, 'email', 'Email not valid');
if(v.hasErrors()) console.log('Validation rejected');
```
