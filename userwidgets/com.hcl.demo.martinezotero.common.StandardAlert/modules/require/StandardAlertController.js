define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.flxBackground.onClick = () => this.view.isVisible = false;
      this.view.flxClose.onClick = () => this.view.isVisible = false;
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },

    show(message){
      this.view.lblMessage.text = message;
      this.view.isVisible = true;
    }
  };
});