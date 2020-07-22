/* globals Shared */

(function() {

  Test.TestC = Trillo.inherits(Shared.AppC, function(viewSpec) {
    Shared.AppC.call(this, viewSpec);
  });

  var TestC = Test.TestC.prototype;
  var AppC = Shared.AppC.prototype;
})();
