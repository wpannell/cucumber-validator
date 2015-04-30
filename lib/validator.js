(function () {
  module.exports = function validator(n) {
    function makeModBy(m, modError) {
      if(n % m === 0) result.push(modError);
    }

    function validateModBy5(n, result) {

      makeModBy(5, 'error.five');
    }

    function validateModBy3(n, result) {
      function makeModBy3(m, modError) {
        if(n % m === 0) result.push(modError);
      }

      makeModBy3(3, 'error.three');
    }

    function validatePositive(n, result) { if(n <= 0) result.push('error.nonpositive'); }

    var result = [];

    validatePositive(n, result);
    validateModBy3(n, result);
    validateModBy5(n, result);

    return result;
  };
})();
