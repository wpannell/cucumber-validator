(function () {
  var chai = require('chai');
  var expect = chai.expect;

  describe('A Validator function will', function () {
    var validator = require('../lib/validator');

    it('return no errors for valid numbers', function () {
      expect(validator(3)).to.be.empty;
    });

    describe('return error.nonpositive', function () {
      it('for 0', function () {
        expect(validator(0)).to.be.deep.equal(['error.nonpositive']);
      });

      it('for negative', function () {
        expect(validator(-2)).to.be.deep.equal(['error.nonpositive']);
      });
    });

  });
})();
