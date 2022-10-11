define(function() {

  return {
    constructor(baseConfig, layoutConfig, pspConfig) {
      this.initComponent();
    },

    initComponent(){
      this.view.camera && (this.view.camera.onCapture = () => {
        eventManager.publish(globals.EVENT_PHOTO_SELECTOR, {show: false, rawBytes: this.view.camera.rawBytes});
      });

      this.view.flxBackground.onClick = () => eventManager.publish(globals.EVENT_PHOTO_SELECTOR, {show: false});
      this.view.buttonCamera.onClickButton = () => eventManager.publish(globals.EVENT_PHOTO_SELECTOR, {show: false});
      this.view.buttonPhoto.onClickButton = () => {
        voltmx.phone.openMediaGallery((rawBytes) => {
          rawBytes && eventManager.publish(globals.EVENT_PHOTO_SELECTOR, {show: false, rawBytes});
        }, {mimetype: "image/*"});
      };
      this.view.buttonVideo.onClickButton = () => {
        voltmx.phone.openMediaGallery((rawBytes) => {
          rawBytes && eventManager.publish(globals.EVENT_PHOTO_SELECTOR, {show: false, isVideo: true});
        }, {mimetype: "video/*"});
      };
    },

    initGettersSetters() {}
  };
});