const Phone = require('./phone');
const Postal = require('./postal');

const IRCheck = function () {};

Verifier.prototype.Phone = Phone;
Verifier.prototype.Postal = Postal;

module.exports = new IRCheck();
