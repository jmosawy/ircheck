const Phone = require('./phone');
const Postal = require('./postal');

const Verifier = function () {};

Verifier.prototype.Phone = Phone;
Verifier.prototype.Postal = Postal;

module.exports = new Verifier();
