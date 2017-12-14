const { describe, it } = require('mocha');
const { expect } = require('chai');
const { National } = require('../index');

describe('National Tools', () => {
  describe('isNationalCodeValid', () => {
    it('should be valid national code', () => {
      expect(National.isNationalCodeValid('0939092001')).to.be.equal(true);
      expect(National.isNationalCodeValid('4721016352')).to.be.equal(true);
      expect(National.isNationalCodeValid('4120128431')).to.be.equal(true);
    });
    it('should not be a valid national code', () => {
      expect(National.isNationalCodeValid('0939092002')).to.be.equal(false);
      expect(National.isNationalCodeValid('472016352')).to.be.equal(false);
      expect(National.isNationalCodeValid('04120128431')).to.be.equal(false);
    });
  });

  describe('isCompanyNationalCodeValid', () => {
    it('should be valid company national code', () => {
      expect(National.isCompanyNationalCodeValid('10380284790')).to.be.equal(true);
      expect(National.isCompanyNationalCodeValid('14007259837')).to.be.equal(true);
      expect(National.isCompanyNationalCodeValid('14007256420')).to.be.equal(true);
    });
    it('should not be valid company national code', () => {
      expect(National.isCompanyNationalCodeValid('1038028479')).to.be.equal(false);
      expect(National.isCompanyNationalCodeValid('14006259837')).to.be.equal(false);
      expect(National.isCompanyNationalCodeValid('14007256429')).to.be.equal(false);
    });
  });
});
