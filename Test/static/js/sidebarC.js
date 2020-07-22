/* globals Test */

(function() {

  Test.sidebarC = Trillo.inherits(Shared.SharedC, function(viewSpec) {
    Shared.SharedC.call(this, viewSpec);
  });

  var sidebarC = Test.sidebarC.prototype;
  var SharedC = Shared.SharedC.prototype;

  sidebarC.handleAction = function(actionName, selectedObj, $e, targetController) {
    return SharedC.handleAction.call(this, actionName, selectedObj, $e, targetController);
  };

  sidebarC.postViewShown = function(view) {
    if (view === this.view()) {
      this.$elem().metisMenu();
    }
    SharedC.postViewShown.call(this, view);
  };

})();
