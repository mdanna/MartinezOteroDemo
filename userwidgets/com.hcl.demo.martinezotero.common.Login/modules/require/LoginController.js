define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			this.view.btnLogin.onClick = () => new voltmx.mvc.Navigation('frmHome').navigate();
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		}
	};
});