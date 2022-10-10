define(function() {

	return {
      constructor: function(baseConfig, layoutConfig, pspConfig) {
        this.view.flxInicio.onClick = () => {
          this.deselectAll();
          this.select('Inicio');
        };
        this.view.flxProyectos.onClick = () => {
          this.deselectAll();
          this.select('Proyectos');
        };
        this.view.flxIncidencias.onClick = () => {
          this.deselectAll();
          this.select('Incidencias');
        };
        this.view.flxHistorico.onClick = () => {
          this.deselectAll();
          this.select('Historico');
        };

      },
      //Logic for getters/setters of custom properties
      initGettersSetters: function() {

      },
      
      deselectAll(){
        this.view.flxInicio.skin = 'slFbox';
        this.view.flxProyectos.skin = 'slFbox';
        this.view.flxIncidencias.skin = 'slFbox';
        this.view.flxHistorico.skin = 'slFbox';
        this.view.lblInicio.skin = 'sknLblDarkGreyMedium90';
        this.view.lblProyectos.skin = 'sknLblDarkGreyMedium90';
        this.view.lblIncidencias.skin = 'sknLblDarkGreyMedium90';
        this.view.lblHistorico.skin = 'sknLblDarkGreyMedium90';
      },
      
      select(suffix){
        this.view[`flx${suffix}`].skin = 'sknFlxBlack';
        this.view[`lbl${suffix}`].skin = 'sknLblWhiteMedium90';
        this.onSelect(suffix);
      },
      
      onSelect(){}
	};
});