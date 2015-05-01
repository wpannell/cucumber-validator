(function () {
  module.exports = function validatePositive(n, result) {
    if(n <= 0) result.push('error.nonpositive');
  }
})();
