(function () {
  module.exports = function validator(n) {
    function validateModBy5(result) {
      if(n % 5 === 0) result.push('error.five');
    }

    function validateModBy3(result) {
      if(n % 3 === 0) result.push('error.three');
    }

    function validatePositive(n, result) { if(n <= 0) result.push('error.nonpositive'); }

    var result = [];

    validatePositive(n, result);
    validateModBy3(result);
    validateModBy5(result);

    return result;
  };
})();
