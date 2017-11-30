import {expect} from 'chai';
import {sum, sub, div, mult} from '../src/main'

//
describe('Calc', () => {
  //
  describe('Smoke tests', () => {

    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exist the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });

    it('should exist the method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2, 2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 0 when `sub(2, 2)`', () => {
      expect(sub(2, 2)).to.be.equal(0);
    });
  });

  describe('Div', () => {
    it('should return 2 when `div(4, 2)`', () => {
      expect(div(4, 2)).to.be.equal(2);
    });

    it('shoud return `not allowed division by zero`', () => {
      expect(div(1, 0)).to.be.equal('not allowed division by zero');
    });
  });

  describe('Mult', () => {
    it('should return 4 when `mult(2, 2)`', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });
});
