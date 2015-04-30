(function () {
  module.exports = function validator(n) {
    if(n < 1) return ['error.nonpositive'];
    if(n % 3 === 0) return ['error.three'];
    return [];
  };
})();
