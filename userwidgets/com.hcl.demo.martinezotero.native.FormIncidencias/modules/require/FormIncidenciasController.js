define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      eventManager.subscribe(globals.EVENT_PHOTO_SELECTOR, ({show}) => this.view.cmpPhotoSelector.isVisible = show);

      this.view.preShow = () => {
        this.resetFields();
        this.initDone || this.initComponent();
        this.initDone = true;
      };
    },

    initComponent(){
      this.view.headerIncidencias.onClickLeft = () => new voltmx.mvc.Navigation('frmHome').navigate();

      this.view.buttonGuardar.onClick = () => {
        const titulo = this.view.fieldTitulo.text;
        const observaciones = this.view.fieldObservaciones.text;
        const causa = this.view.fieldCausa.getSelection();
        const solucionado = this.view.fieldSolucionado.selected;
        const minutos = this.view.fieldMinutos.text;
        const fecha = this.view.fieldFecha.getDate();

        if(titulo && observaciones && causa && minutos && fecha !== '00/00/00'){
          voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
          var objSvc = VMXFoundry.getObjectService("AggityObjSvc", {
            "access": "online"
          });
          var dataObject = new voltmx.sdk.dto.DataObject("Incidencias");
          dataObject.addField("titulo", titulo);
          dataObject.addField("observaciones", observaciones);
          dataObject.addField("causa", causa);
          dataObject.addField("solucionado", solucionado);
          dataObject.addField("minutos", minutos);
          dataObject.addField("fecha", fecha);
          objSvc.create({dataObject}, (response) => {
            voltmx.application.dismissLoadingScreen();
            this.resetFields();
            alert('Registro creado con éxito.');
            voltmx.print("Record created: " + JSON.stringify(response));
          }, (error) => {
            voltmx.application.dismissLoadingScreen();
            alert('Error al intentar vrear registro.');
            voltmx.print("Error in record creation: " + JSON.stringify(error));
          });
        } else {
          alert('Todos los campos son obligatorios.');
        }
      };
    },
    
    initGettersSetters() {},
    
    resetFields(){
        this.view.fieldTitulo.text = '';
        this.view.fieldObservaciones.text = '';
        this.view.fieldCausa.resetSelection();
        this.view.fieldSolucionado.selected = false;
        this.view.fieldMinutos.text = '';
        this.view.fieldFecha.resetDate();
    }
  };
});