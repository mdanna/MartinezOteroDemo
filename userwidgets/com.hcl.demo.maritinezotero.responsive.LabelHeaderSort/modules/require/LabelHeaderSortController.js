define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      eventManager.subscribe(globals.EVENT_SORT, ({key, newSortOrder}) => {
        if(this.key){
          this.sortOrder = key === this.key ? newSortOrder : 'none';
        }
      });
      this.view.preShow = () => {
        if(!this.initDone){
          this.view.onClick = () => {
            if(this.key){
              let newSortOrder = 'asc';
              this.sortOrder === 'asc' && (newSortOrder = 'desc');
              eventManager.publish(globals.EVENT_SORT, {key: this.key, newSortOrder});
            }
          };
          this.initDone = true;
        }
      };

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'sortOrder', () => {
        return this._sortOrder;
      });
      defineSetter(this, 'sortOrder', value => {
        this._sortOrder = value;
        this.view.lblIconUp.isVisible = value === 'asc';
        this.view.lblIconDown.isVisible = value === 'desc';
      });
      defineGetter(this, 'key', () => {
        return this._key;
      });
      defineSetter(this, 'key', value => {
        this._key = value;
      });
    }
  };
});