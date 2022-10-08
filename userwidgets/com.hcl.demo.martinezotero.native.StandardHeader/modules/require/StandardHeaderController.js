define(function() {
  const SKN_HEADER_WHITE = 'sknFlxWhite';
  const SKN_ICON_DARK = 'sknLblIconDark';
  const SKN_TITLE_DARK = 'sknLblBold120';
  
  const SKN_HEADER_DARK = 'sknFlxDark';
  const SKN_ICON_WHITE = 'sknLblIconWhite';
  const SKN_TITLE_WHITE = 'sknLblWhiteBold120';

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			this.view.preShow = () => {
              this.view.skin = this.dark ? SKN_HEADER_DARK : SKN_HEADER_WHITE;
              this.view.lblIconLeft.skin = this.dark ? SKN_ICON_WHITE : SKN_ICON_DARK;
              this.view.lblIconRight.skin = this.dark ? SKN_ICON_WHITE : SKN_ICON_DARK;
              this.view.lblTitle.skin = this.dark ? SKN_TITLE_WHITE : SKN_TITLE_DARK;
            };
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
            defineGetter(this, 'dark', () => {
                return this._dark;
            });
            defineSetter(this, 'dark', value => {
                this._dark = value;
            });
        }
	};
});