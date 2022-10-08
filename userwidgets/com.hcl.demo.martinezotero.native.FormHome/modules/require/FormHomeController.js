define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			this.view.preShow = () => {
              if(!this.initDone){
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
                
                this.view.teaserIncidencias.onClick = () => new voltmx.mvc.Navigation('frmIncidencias').navigate();
                this.initDone = true;
              }
            };
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		}
	};
});