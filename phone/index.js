const PROVINCES = require('./provinces');

const TYPES = { landline: 'LANDLINE', mobile: 'MOBILE' };
const MobileRegex = /^(((\+|00)?98)|0)?9\d{9}$/g;
const landlineRegex = /^((((\+)|00)?98)|0?)([1-8]{2})[1-9][0-9]{4,8}$/g;

const Phone = function () { };

/**
 * Check whether if a number is a type of mobile or landline
 * @param {string} number
 * @returns {(string|boolean)} MOBILE/LANDLINE - false
 */
Phone.prototype.checkType = function (number) {
  if (this.isMobile(number)) {
    return TYPES.mobile;
  } else if (this.isLandline(number)) {
    return TYPES.landline;
  }
  return false;
};

/**
 * Verify the input number is a type of mobile
 * @param {string} number
 * @returns {boolean}
 */
Phone.prototype.isMobile = function (number) {
  return new RegExp(MobileRegex).test(number);
};

/**
 * Verify the input number is a type of landline
 * @param {string} number
 * @returns {boolean}
 */
Phone.prototype.isLandline = function (number) {
  return new RegExp(landlineRegex).test(number);
};

/**
 * Normalize a mobile number as 9121234567
 * @param {string} number
 * @returns {string}
 */
Phone.prototype.normalizeMobile = function (number) {
  if (this.isMobile(number)) {
    return number.replace(/^(((\+|00)?98)|0)/, '');
  }
  return null;
};

/**
 * Normalize a landline number as 2191001848
 * @param {string} number
 * @returns {string}
 */
Phone.prototype.normalizeLandline = function (number) {
  if (this.isLandline(number)) {
    return number.replace(/^((((\+)|00)?98)|0?)/, '');
  }
  return null;
};

/**
 * Get province info from its area code or code name
 * @param {(string|number)} province
 * @return {object}
 */
Phone.prototype.getProvinceData = function (province) {
  let provinceData = null;

  if (typeof (province) === 'string') {
    provinceData = PROVINCES.find(prvnc => prvnc.code === province);
  } else if (typeof (province) === 'number') {
    provinceData = PROVINCES.find(prvnc => prvnc.areaCode === province);
  }

  return provinceData;
};

/**
 * Extract province data from a landline numbers
 * @param {string} number
 * @returns {object}
 */
Phone.prototype.getProvincesFromLandline = function (number) {
  return this.getProvinceData(parseInt(this.normalizeLandline(number).substr(0, 2), 10));
};

module.exports = new Phone();
