const Phone = require('./phone');
const Postal = require('./postal');
const National = require('./national');

const IRCheck = function () {};

IRCheck.prototype.Phone = Phone;
IRCheck.prototype.Postal = Postal;
IRCheck.prototype.National = National;

module.exports = new IRCheck();
