const National = function () {};

/**
 * Check if the entered Iranian national code is valid.
 * @param {string} nationalCode
 * @returns {boolean}
 */
National.prototype.isNationalCodeValid = function (nationalCode) {
  if (nationalCode.length !== 10) {
    return false;
  }
  let sumOfMultipliedNumber = 0;
  for (i = 10; i > 1; i -= 1) {
    sumOfMultipliedNumber += nationalCode.charAt(10 - i) * i;
  }

  const r = sumOfMultipliedNumber % 11;

  if (r < 2) {
    return Number(nationalCode.charAt(9)) === r;
  }

  return Number(nationalCode.charAt(9)) === (11 - r);
}

/**
* Check if the entered Iranian company national code is valid.
* @param {string} companyNationalCode
* @returns {boolean}
*/
National.prototype.isCompanyNationalCodeValid = function (companyNationalCode) {
  if ((companyNationalCode.length !== 11) || (isNaN(Number(companyNationalCode)))) {
    return false;
  }

  const ratios = [29, 27, 23, 19, 17, 29, 27, 23, 19, 17];
  const baseNumber = Number(companyNationalCode.charAt(9)) + 2;
  let sumOfMultipliedNumber = 0;
  for (i = 0; i < 10; i += 1) {
    sumOfMultipliedNumber += (Number(companyNationalCode.charAt(i)) + baseNumber) * ratios[i];
}

  const r = (sumOfMultipliedNumber % 11) === 10 ? 0 : (sumOfMultipliedNumber % 11);
  return (r === Number(companyNationalCode.charAt(10)));
}

module.exports = new National();
