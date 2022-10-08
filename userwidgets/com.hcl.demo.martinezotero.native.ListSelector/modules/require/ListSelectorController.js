define(function() {

  return {
    constructor(baseConfig, layoutConfig, pspConfig) {},

    initGettersSetters() {},

    getSelection(){
      return this.view.lbxSelector.selectedKeyValue[1];
    },
    
    resetSelection(){
      this.view.lbxSelector.selectedKey = null;
    }
  };
});