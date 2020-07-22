/* globals Test */

(function() {

  Test.AttachmentsC = Trillo.inherits(Shared.SharedC, function(viewSpec) {
    Shared.SharedC.call(this, viewSpec);
  });

  var AttachmentsC = Test.AttachmentsC.prototype;
  var SharedC = Shared.SharedC.prototype;

  AttachmentsC.handleAction = function(actionName, selectedObj, $e, targetController) {
    return SharedC.handleAction.call(this, actionName, selectedObj, $e, targetController);
  };

  AttachmentsC.postViewShown = function(view) {
    SharedC.postViewShown.call(this, view);
  };

  AttachmentsC.getFileUploadSpec = function() {
    var viewSpec = SharedC.getFileUploadSpec.call(this);
    viewSpec.params.parentUid = this.getParentData().uid;
    viewSpec.params.orgName = this.appCtx().orgName;
    viewSpec.params.appName = this.appCtx().appName;
    viewSpec.params.folder = "/files";
    viewSpec.params.uploadUrl = Trillo.appServedByDt ? "/rt/file/upload" : "/_service/file/upload";
    return viewSpec;
  };

  AttachmentsC.fileUploadSuccessful = function(data, requestPending, fileC) {
    this.model().addObj(data);
    SharedC.fileUploadSuccessful.call(this, data, requestPending, fileC);
  };
})();
