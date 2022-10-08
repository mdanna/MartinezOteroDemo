define(function() {

  return {
    constructor(baseConfig, layoutConfig, pspConfig) {
      const self = this;
      this.view.flxDeletePhoto.onClick = () => {
        eventManager.publish(globals.EVENT_DELETE_PHOTO, {
          id: self.view.id
        });
      };
    },
    
    initGettersSetters() {},

    setPhoto(rawBytes){
      rawBytes && (this.view.imgPhoto.base64 = voltmx.convertToBase64(rawBytes));
    }
  };
});