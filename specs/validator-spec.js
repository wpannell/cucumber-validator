(function () {
  var chai = require('chai');
  chai.should();

  describe('A Validator function will', function () {

    function validator() {
      return ['error.nonpositive'];
    }

    it('return error.nonpositive for not strictly positive numbers', function () {
      var validator = require('../lib/validator');
      validator(0).should.be.deep.equal(['error.nonpositive']);
    });
  });
})();
