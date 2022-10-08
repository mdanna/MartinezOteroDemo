define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.doLayout = () => {
        const widgets = this.view.flxPhotoList.widgets() || [];
        this.view.flxPhotoList.width = `${80 * widgets.length}dp`;
      };

      eventManager.subscribe(globals.EVENT_DELETE_PHOTO, ({id}) => {
        let photoThumbnails = [];
        const widgets = this.view.flxPhotoList.widgets() || [];
        photoThumbnails = widgets.filter((widget) => widget.id !== id);
        this.view.flxPhotoList.removeAll();
        photoThumbnails.forEach((photoThumbnail) => {
          this.view.flxPhotoList.add(photoThumbnail);
        });
        this.view.flxPhotoList.width = `${80 * photoThumbnails.length}dp`;
      });
      
      eventManager.subscribe(globals.EVENT_PHOTO_SELECTOR, ({show, rawBytes, isVideo}) => {
        if(rawBytes || isVideo){
          const photoThumbnail = new com.hcl.demo.martinezotero.native.PhotoThumbnail({
            id: `thumb${new Date().getTime()}`
          }, {}, {});
          isVideo || photoThumbnail.setPhoto(rawBytes);
          this.view.flxPhotoList.add(photoThumbnail);
          this.view.flxPhotoList.width = `${80 * this.view.flxPhotoList.widgets().length}dp`;
        }
      });

    },
   
    initGettersSetters: function() {

    }
  };
});