(function () {
  var chai = require('chai');
  var expect = chai.expect;

  describe('A Validator function will', function () {
    var validator = require('../lib/validator');

    it('include no errors for valid numbers', function () {
      expect(validator(7)).to.be.empty;
    });

    describe('include error.nonpositive', function () {
      it('for 0', function () {
        expect(validator(0)).to.include('error.nonpositive');
      });

      it('for negative', function () {
        expect(validator(-2)).to.include('error.nonpositive');
      });
    });

    describe('include error.three for mod 3 like', function () {
      it('3', function () {
        expect(validator(3)).to.include('error.three');
      });

      it('and 42', function () {
        expect(validator(42)).to.include('error.three');
      });
    });

    describe('include error.five for mod 5 like:', function () {
      it('5', function () {
        expect(validator(5)).to.include('error.five');
      });

      it('and 10', function () {
        expect(validator(10)).to.include('error.five');
      });
    });

    it('will include one error for each violation', function () {
      expect(validator(15)).to.include('error.three', 'error.five');
    });
  });
})();
