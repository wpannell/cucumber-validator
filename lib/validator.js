(function () {
  module.exports = function validator(n) {
    function makeModBy(m, modError) {
      return function(n, result) { if(n % m === 0) result.push(modError); }
    }

    function validatePositive(n, result) { if(n <= 0) result.push('error.nonpositive'); }

    var validateModBy3 = makeModBy(5, 'error.five');
    var validateModBy5 = makeModBy(3, 'error.three');

    var rules = [
      validatePositive,
      validateModBy3,
      validateModBy5
    ];

    var result = [];

    validatePositive(n, result);
    validateModBy3(n, result);
    validateModBy5(n, result);

    return result;
  };
})();
