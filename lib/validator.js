(function () {
  module.exports = function validator(n) {
    function validatePositive(n, result) { if(n <= 0) result.push('error.nonpositive'); }

    function makeModBy(m, modError) {
      return function(n, result) { if(n % m === 0) result.push(modError); }
    }

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
