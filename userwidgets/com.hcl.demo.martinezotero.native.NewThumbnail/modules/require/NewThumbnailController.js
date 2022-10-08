define(function() {

  return {
    constructor(baseConfig, layoutConfig, pspConfig) {
      this.initComponent();
    },

    initGettersSetters() {},

    initComponent(){
      this.view.onClick = () => {
        eventManager.publish(globals.EVENT_PHOTO_SELECTOR, {show: true});
      };

    }
  };
});