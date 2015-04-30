(function () {
  var chai = require('chai');
  var expect = chai.expect;

  describe('A Validator function will', function () {
    it('return error.nonpositive for not strictly positive numbers', function () {
      var validator = require('../lib/validator');
      expect(validator(0)).to.be.deep.equal(['error.nonpositive']);
    });
  });
})();
