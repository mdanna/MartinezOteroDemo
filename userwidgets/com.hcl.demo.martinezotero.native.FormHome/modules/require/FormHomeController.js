define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        this.initDone || this.initComponent();
        this.initDone = true;
      };

    },
    initComponent(){
      this.view.headerHome.onClickLeft = () => this.view.menu.toggle(true);

      this.view.menu.onItemSelected = (key) => {
        switch(key){
          case 'incidencias':
            new voltmx.mvc.Navigation('frmIncidencias').navigate();
            break;
          case 'desconectar':
            new voltmx.mvc.Navigation('frmLogin').navigate();
            break;
          default:
            break;
        }
      };

      this.view.teaserIncidencias.onClickTeaserBox = () => new voltmx.mvc.Navigation('frmIncidencias').navigate();
    },

    initGettersSetters: function() {

    }
  };
});