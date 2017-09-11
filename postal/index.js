const PostalCodeRegex = /^[13-9]{10}$/;

const Postal = function () {};

/**
 * Check if the entered postal code is valid.
 * @param {string} postalCode
 * @returns {boolean}
 */
Postal.prototype.isPostalCodeValid = function (postalCode) {
  return new RegExp(PostalCodeRegex).test(postalCode);
};

module.exports = new Postal();
