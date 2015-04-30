(function () {
  module.exports = function validator(n) {
    function validateModBy5() { if(n % 5 === 0) result.push('error.five'); }
    function validateModBy3() { if(n % 3 === 0) result.push('error.three'); }

    var result = [];

    if(n <= 0) result.push('error.nonpositive');

    validateModBy3();
    validateModBy5();
    return result;
  };
})();
