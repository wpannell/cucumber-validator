(function () {
  module.exports = function validator(n) {
    if(n < 1) return ['error.nonpositive'];
    return [];
  };
})();
