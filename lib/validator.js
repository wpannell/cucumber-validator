(function () {
  module.exports = function validator(n) {
    function modBy5() { if(n % 5 === 0) result.push('error.five'); }
    function modBy3() { if(n % 3 === 0) result.push('error.three'); }

    var result = [];
    if(n <= 0) {
      result.push('error.nonpositive');
      return result;
    }
    modBy3();
    modBy5();
    return result;
  };
})();
