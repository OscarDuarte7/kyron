'use strict';

/**
 * @ngdoc function
 * @name kyronApp.controller:CrearProduccionAcademicaCtrl
 * @description
 * # CrearProduccionAcademicaCtrl
 * Controller of the kyronApp
 */
angular.module('kyronApp')
  .controller('CrearProduccionAcademicaCtrl', function (produccionAcademicaServices, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    var self = this;
    self.id = $rootScope.id;
    self.vista_previa = false;
    self.tr_produccion_academica = {};
    self.gridOptions = {
      enableFiltering: true,
      enableSorting: true,
      enableRowSelection: true,
      enableRowHeaderSelection: false,
      columnDefs: [
        {
          field: 'TituloProduccion', displayName: 'Titulo Producción', width: 200
        },
        {
          field: 'FechaProduccion', displayName: 'Fecha Producción', width: 200, cellFilter: 'date:"yyyy-MM-dd"'
        },
        {
          field: 'Pais', displayName: 'País', width: 100
        },
        {
          field: 'Ciudad', width: 100
        },
        {
          field: 'SubtipoProduccionId.Nombre', displayName: 'Subtipo Producción', width: 300
        },

      ]
    };
    self.gridOptions.multiSelect = false;
    var get_produccion_academica = function () {
      produccionAcademicaServices.get('produccion_academica', $.param({
        query: "PersonaId:" + self.id + ",Vigente:" + true,
        limit: 0
      })).then(function (response) {
        self.gridOptions.data = response.data;
        console.log(self.gridOptions.data);
      });
    };

    var get_tipo_produccion = function () {
      produccionAcademicaServices.get('tipo_produccion', 'limit=0').then(function (response) {
        self.tipo_produccion = response.data;
      });
    };

    var get_subtipo_produccion = function () {
      produccionAcademicaServices.get('subtipo_produccion', 'limit=0').then(function (response) {
        self.subtipo_produccion = response.data;
      });
    };

    var get_opcion_dato = function () {
      produccionAcademicaServices.get('opcion_dato', 'limit=0').then(function (response) {
        self.opcion_dato = response.data;
      });
    };


    get_produccion_academica();
    get_tipo_produccion();
    get_subtipo_produccion();
    get_opcion_dato();


    self.gridOptions.onRegisterApi = function (gridApi) {
      self.gridApi = gridApi;
    };

    self.limpiar_seleccion = function () {
      self.vista_previa = !self.vista_previa;
      self.tr_produccion_academica = {};
    };




    self.getDatoSubtipo = function (idSubtipo) {
      self.paramSubtipoProduccion = $.param({
        query: "SubtipoProduccion:" + idSubtipo
      });
      produccionAcademicaServices.get("dato_subtipo", self.paramSubtipoProduccion).then(function (response) {
        self.infoDatoSubtipo = response.data;

        self.infoInput = [];
        self.infoSelect = [];
        for (var i = 0; i < self.infoDatoSubtipo.length; i++) {
          self.infoDatoSubtipo[i].Dominio = JSON.parse(self.infoDatoSubtipo[i].Dominio);
          switch (self.infoDatoSubtipo[i].Dominio.Entrada) {
            case "input":
              self.infoInput.push(self.infoDatoSubtipo[i]);
              break;
            case "select":
              self.infoSelect.push(self.infoDatoSubtipo[i]);
              break;

          }

        }
      });

    };


    self.guardar = function () {

      var dataDatoProduccion = [];

      for (var i = 0; i < self.infoInput.length; i++) {


        dataDatoProduccion.push({
          "DatoSubtipoId": { "Id": self.infoInput[i].Id },
          "Valor": self.infoInput[i].Dominio.Valor.toString()
        });
      }

      for (var j = 0; j < self.infoSelect.length; j++) {

        dataDatoProduccion.push({
          "DatoSubtipoId": { "Id": self.infoSelect[j].Id },
          "Valor": self.infoSelect[j].Dominio.Valor.toString()
        });
      }

      self.tr_produccion_academica.DatoProduccion = dataDatoProduccion;
      self.tr_produccion_academica.ProduccionAcademica.PersonaId = self.id;
      self.tr_produccion_academica.ProduccionAcademica.FechaDato = new Date();
      self.tr_produccion_academica.ProduccionAcademica.Validacion = false;
      self.tr_produccion_academica.ProduccionAcademica.Vigente = true;

      produccionAcademicaServices.post("tr_produccion_academica", { ProduccionAcademica: self.tr_produccion_academica.ProduccionAcademica})
        .then(function (response) {
        console.log(response);
          if (response.status === 201) {
            swal(
              'Buen trabajo!',
              'Añadió la formación con éxito',
              'success'
            );
            get_produccion_academica();
          } else {
            swal(
              'Ha ocurrido un error',
              response.data,
              'error'
            );
          }
          self.limpiar_seleccion();

        });

    };

  });
