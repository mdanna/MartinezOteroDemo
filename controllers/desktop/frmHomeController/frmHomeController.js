define({ 

  onViewCreated(){
    this.view.init = () => {
      this.view.doLayout = () => {
        const contentWidth = this.view.frame.width - 250;
        this.view.flxContent.width = `${contentWidth}dp`;
        this.view.flxContent.height = `${this.view.frame.height - 50}dp`;
      };

      this.view.flxIncidencias.doLayout = () => {
        const width = Math.floor((this.view.flxIncidencias.frame.width - 15 - 15 - 15 - 50) / 3);
        this.view.fieldSearchProyectos.width = `${width}dp`;
        this.view.fieldSearchSolicitantes.width = `${width}dp`;
        this.view.fieldSearchSolicitantes.left = `${width + 15}dp`;
        this.view.fieldSearchDepartamentos.width = `${width}dp`;
        this.view.fieldSearchDepartamentos.left = `${width + 15 + width + 15}dp`;
        this.view.fieldSearchTitulo.width = `${width}dp`;
        this.view.fieldSearchNombres.width = `${width}dp`;
        this.view.fieldSearchNombres.left = `${width + 15}dp`;
        this.view.fieldSearchTipos.width = `${width}dp`;
        this.view.fieldSearchTipos.left = `${width + 15 + width + 15}dp`;

        this.view.flxTable.height = `${this.view.flxIncidencias.frame.height - 265}dp`;
      };

      this.view.cmpLeftMenu.onSelect = (suffix) => {
        this.view.flxIncidencias.isVisible = suffix === 'Incidencias';
        suffix === 'Incidencias' && this.loadData();
      };

      this.view.btnDesconectar.onClick = () => {
        new voltmx.mvc.Navigation('frmLogin').navigate();
      };

      eventManager.subscribe(globals.EVENT_SORT, ({key, newSortOrder}) => {
        this.sortData(key, newSortOrder);                                   
      });

      this.view.preShow = () => {
        this.loadData();
      };


    };
  },

  loadData(){
    voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    var objSvc = VMXFoundry.getObjectService(globals.OBJECT_SERVICE, {
      "access": "online"
    });
    var dataObject = new voltmx.sdk.dto.DataObject("Incidencias");
    objSvc.fetch({dataObject}, (response) => {
      this.records = response.records;
      this.sortData('id', 'asc');
      voltmx.application.dismissLoadingScreen();
    }, (error) => {
      voltmx.application.dismissLoadingScreen();
      alert('Error.');
    });
  },

  sortData(sortKey, direction){
    this.view.flxIncidenciasItems.removeAll();
    this.records.sort((a, b) => {
      if(sortKey === 'fecha'){
        const aSplit = a[sortKey].split('/');
        const bSplit = b[sortKey].split('/');
        const aDate = parseInt(`${aSplit[2]}${aSplit[1]}${aSplit[0]}`);
        const bDate = parseInt(`${bSplit[2]}${bSplit[1]}${bSplit[0]}`);
        if(aDate > bDate){
          return direction === 'asc' ? 1 : -1;
        } else if(aDate < bDate){
          return direction === 'asc' ? -1 : 11;
        } else {
          return 0;
        }
      } else if(sortKey === 'solucionado'){
        const aValue = a[sortKey] ? 'S' : 'N';
        const bValue = b[sortKey] ? 'S' : 'N';
        if(aValue > bValue){
          return direction === 'asc' ? 1 : -1;
        } else if(aValue <  bValue){
          return direction === 'asc' ? -1 : 11;
        } else {
          return 0;
        }
      } else {
        if(a[sortKey] > b[sortKey]){
          return direction === 'asc' ? 1 : -1;
        } else if(a[sortKey] < b[sortKey]){
          return direction === 'asc' ? -1 : 11;
        } else {
          return 0;
        }
      }
    });
    this.records.forEach((record, index) => {
      const item = new com.hcl.demo.martinezotero.responsive.IncidenciasItem({
        id: `item${new Date().getTime()}`,
        skin: index % 2 ? 'sknFlxItemAlternate' : 'slFbox'
      }, {}, {});
      item.numIncidencia = record.id + '';
      item.titulo = record.titulo;
      item.causa = record.causa;
      item.solucionado = record.solucionado ? 'S' : 'N';
      item.fecha = record.fecha;
      this.view.flxIncidenciasItems.add(item);
    });
  },


});