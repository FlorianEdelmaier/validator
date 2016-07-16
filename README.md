# fluent-validator

```javascript
const Validator = require('fluent-validator');
const validations = Validator.validations;

const v = new Validator();
v.check(validations.exists, validations.isEmail)(req.body, 'email', 'Email not valid');
if(v.hasErrors()) console.log('Validation rejected');
```
