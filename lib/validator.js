(function () {
  module.exports = function validator(n) {
    function makeModBy(m, modError) {
      return function(n, result) { if(n % m === 0) result.push(modError); }
    }

    function validatePositive(n, result) { if(n <= 0) result.push('error.nonpositive'); }

    var rules = [
      validatePositive,
      makeModBy(5, 'error.five'),
      makeModBy(3, 'error.three')
    ];

    var result = [];

    validatePositive(n, result);
    makeModBy(5, 'error.five')(n, result);
    makeModBy(3, 'error.three')(n, result);

    return rules.reduce(function(result, rule) {
      rule(n, result);
      return result;
    }, []);
  };
})();
