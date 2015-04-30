(function () {
  var chai = require('chai');
  var expect = chai.expect;

  describe('A Validator function will', function () {
    var validator = require('../lib/validator');

    it('return no errors for valid numbers', function () {
      expect(validator(3)).to.be.empty;
    });

    it('will return error.nonpositive for not strictly positive numbers', function () {
      expect(validator(0)).to.be.deep.equal(['error.nonpositive']);
    });
  });
})();
