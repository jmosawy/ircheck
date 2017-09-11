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

module.exports = new National();
