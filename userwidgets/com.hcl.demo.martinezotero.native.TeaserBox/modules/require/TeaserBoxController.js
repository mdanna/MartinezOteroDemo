define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        this.initDone || this.initComponent();
        this.initDone = true;
      };
    },
    initComponent(){
      this.view.onClick = () => this.onClickTeaserBox();
    },
    initGettersSetters() {

    },
    onClickTeaserBox(){}
  };
});