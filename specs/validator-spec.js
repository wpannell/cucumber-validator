(function () {
  var assert = require('assert');

  describe('A Validator function will', function () {
    it('return error.nonpositive for not strictly positive numbers', function () {
      var validator = new Validator();
      assert.deepEqual(validator(0), ['error.nonpositive']);
    });
  });
})();
