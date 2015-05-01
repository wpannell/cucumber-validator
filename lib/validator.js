(function () {
  module.exports = function validator(n) {
    function makeModBy(m, modError) {
      return function(n, result) { if(n % m === 0) result.push(modError); }
    }

    function validatePositive(n, result) { if(n <= 0) result.push('error.nonpositive'); }

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
