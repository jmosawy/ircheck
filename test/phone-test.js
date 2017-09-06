const { Phone } = require('../index');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('Phone Tools', () => {
  describe('checkType', () => {
    it('should be type of LANDLINE', () => {
      expect(Phone.checkType('02188758709')).to.equal('LANDLINE');
      expect(Phone.checkType('+985380001231')).to.equal('LANDLINE');
      expect(Phone.checkType('00982545622298')).to.equal('LANDLINE');
      expect(Phone.checkType('5489882332')).to.equal('LANDLINE');
      expect(Phone.checkType('05332210998')).to.equal('LANDLINE');
    });
    it('should be type of MOBILE', () => {
      expect(Phone.checkType('09128335993')).to.equal('MOBILE');
      expect(Phone.checkType('+989128335993')).to.equal('MOBILE');
      expect(Phone.checkType('00989128335993')).to.equal('MOBILE');
      expect(Phone.checkType('9128335993')).to.equal('MOBILE');
      expect(Phone.checkType('+989198920200')).to.equal('MOBILE');
    });
    it('should return false due to invalidity of numbers', () => {
      expect(Phone.checkType('0912833599')).to.equal(false);
    });
  });
  describe('isMobile', () => {
    it('should be verified as mobile number', () => {
      expect(Phone.isMobile('09128335993')).to.equal(true);
      expect(Phone.isMobile('+989128335993')).to.equal(true);
      expect(Phone.isMobile('00989128335993')).to.equal(true);
      expect(Phone.isMobile('9128335993')).to.equal(true);
      expect(Phone.isMobile('+989198920200')).to.equal(true);
    });
    it('should be not verified as mobile number', () => {
      expect(Phone.isMobile('8128335993')).to.not.equal(true);
      expect(Phone.isMobile('+98912833599')).to.not.equal(true);
      expect(Phone.isMobile('009891283355')).to.not.equal(true);
      expect(Phone.isMobile('+988128335993')).to.not.equal(true);
    });
  });
  describe('isLandline', () => {
    it('should be verified as landline number', () => {
      expect(Phone.isLandline('02188758709')).to.equal(true);
      expect(Phone.isLandline('+985380001231')).to.equal(true);
      expect(Phone.isLandline('00982545622298')).to.equal(true);
      expect(Phone.isLandline('5489882332')).to.equal(true);
      expect(Phone.isLandline('05332210998')).to.equal(true);
    });
  });
  describe('normalizeMobile', () => {
    it('should be normalized', () => {
      expect(Phone.normalizeMobile('+989128335993')).to.equal('9128335993');
      expect(Phone.normalizeMobile('00989128335993')).to.equal('9128335993');
      expect(Phone.normalizeMobile('09128335993')).to.equal('9128335993');
      expect(Phone.normalizeMobile('9128335993')).to.equal('9128335993');
    });
  });
  describe('normalizeLandline', () => {
    it('should be normalized', () => {
      expect(Phone.normalizeLandline('+982191001848')).to.equal('2191001848');
      expect(Phone.normalizeLandline('982191001848')).to.equal('2191001848');
      expect(Phone.normalizeLandline('00982191001848')).to.equal('2191001848');
      expect(Phone.normalizeLandline('2191001848')).to.equal('2191001848');
      expect(Phone.normalizeLandline('02191001848')).to.equal('2191001848');
    });
  });
  describe('getProvinceData', () => {
    it('should be Tehran', () => {
      expect(Phone.getProvinceData(21).name).to.equal('Tehran');
      expect(Phone.getProvinceData('TE').areaCode).to.equal(21);
    });
  });
  describe('getProvincesFromLandline', () => {
    it('should be Tehran', () => {
      expect(Phone.getProvincesFromLandline('+982191001848').name).to.equal('Tehran');
      expect(Phone.getProvincesFromLandline('982191001848').name).to.equal('Tehran');
      expect(Phone.getProvincesFromLandline('00982191001848').name).to.equal('Tehran');
    });
  });
});
