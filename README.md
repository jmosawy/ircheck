# IRCheck
IRCheck is a Node.js validation library developed for Iranian developers in order to help them to do some validations on their specific national data.

## Install & Usage
You can install the package via the following command:

`npm install ircheck`

### Usage
First you need to import the package:
```javascript
const IRCheck = require('ircheck');
```

Then you can use the available methods for different available validators:
```javascript
IRCheck.Phone.checkType('02191001848'); //returns 'LANDLINE'
IRCheck.Phone.normalizeMobile('+989121234567'); // returns '9121234567'
```

## Validators Availability
Currently, the following validators are available:
* [Iran Phone Numbers](#phone)

### Phone
Here’s a list of available methods:
* `checkType(number)`  Check whether if a number is a type of mobile or landline
* `isMobile(number)` Verify the input number is a type of mobile
* `isLandline(number)` Verify the input number is a type of landline
* `normalizeMobile(number)`  Normalize a mobile number as 9121234567
* `normalizeLandline(number)` Normalize a landline number as 2191001848
* `getProvinceData(number)` Get province info from its area code or code name
* `getProvincesFromLandline(number)` Extract province data from a landline numbers

## History
### 0.1.1
* Fixing typo errors in README.md file.

### 0.1.0
* Initial release

## Contribution
Any contribution is much appreciated. Make sure that you write and run tests before submitting PR.

## License
MIT licensed
Copyright (C) 2017 Jeff Mosawy, [http://jmosawy.com](http://jmosawy.com)
