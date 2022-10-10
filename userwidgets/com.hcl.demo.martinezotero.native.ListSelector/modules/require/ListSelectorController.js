define(function() {

  return {
    constructor(baseConfig, layoutConfig, pspConfig) {},

    initGettersSetters() {},

    getSelection(){
      return this.view.lbxSelector.selectedKeyValue ? this.view.lbxSelector.selectedKeyValue[1] : null;
    },
    
    resetSelection(){
      this.view.lbxSelector.selectedKey = null;
    }
  };
});