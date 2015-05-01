(function () {
  module.exports = function makeModBy(m, modError) {
    return function (n, result) {
      if(n % m === 0) result.push(modError);
    }
  }
})();
