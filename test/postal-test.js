const { describe, it } = require('mocha');
const { expect } = require('chai');
const { Postal } = require('../index');

describe('Postal Tools', () => {
  describe('isPostalCodeValid', () => {
    it('should be valid postal codes', () => {
      expect(Postal.isPostalCodeValid('1834556784')).to.equal(true);
      expect(Postal.isPostalCodeValid('7634598734')).to.equal(true);
      expect(Postal.isPostalCodeValid('3813187764')).to.equal(true);
    });
    it('should be not a valid postal code', () => {
      expect(Postal.isPostalCodeValid('76654543')).to.equal(false);
      expect(Postal.isPostalCodeValid('1898875423')).to.equal(false);
      expect(Postal.isPostalCodeValid('1890875413')).to.equal(false);
    });
  });
});
