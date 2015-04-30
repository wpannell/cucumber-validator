(function () {
  module.exports = function validator(n) {
    function validateModBy5(n, result) {
      function makeModBy(m, modError) {
        if(n % m === 0) result.push(modError);
      }

      makeModBy(5, 'error.five'); }
    function validateModBy3(n, result) { if(n % 3 === 0) result.push('error.three'); }
    function validatePositive(n, result) { if(n <= 0) result.push('error.nonpositive'); }

    var result = [];

    validatePositive(n, result);
    validateModBy3(n, result);
    validateModBy5(n, result);

    return result;
  };
})();
