define(function() {

  return {
    constructor(baseConfig, layoutConfig, pspConfig) {
      this.initDone || this.initComponent();
      this.initDone = true;
    },

    initComponent(){
		this.view.onClick = () => this.onClickButton();
    },

    initGettersSetters() {},
    
    onClickButton(){}
  };
});