(function () {
  module.exports = function validator(n) {
    var validatePositive = require('./validator/rules/validatePositive');
    var makeModBy = require('./validator/rules/makeModBy');

    var rules = [
      validatePositive,
      makeModBy(3, 'error.three'),
      makeModBy(5, 'error.five')
    ];

    return rules.reduce(function(result, rule) {
      rule(n, result);
      return result;
    }, []);
  };
})();
