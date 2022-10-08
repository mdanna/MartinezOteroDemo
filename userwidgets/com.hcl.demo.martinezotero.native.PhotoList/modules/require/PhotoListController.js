define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
          this.view.doLayout = () => {
            this.view.flxPhotoList.width = `${80 * this.view.flxPhotoList.widgets().length}dp`;
          };
          
			this.view.prShow = () => {
              if(!this.initDone){
                this.initDone = true;
              }
            };
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		}
	};
});