(function () {
  var assert = require('assert');

  describe('A Validator function will', function () {

    function validator() {
      return ['error.nonpositive']
    };

    it('return error.nonpositive for not strictly positive numbers', function () {
      var validator = require('../lib/validator');
      assert.deepEqual(validator(0), ['error.nonpositive']);
    });
  });
})();
