'use strict';

/**
 * @ngdoc function
 * @name kyronApp.controller:CrearFormacionAcademicaCtrl
 * @description
 * # CrearFormacionAcademicaCtrl
 * Controller of the kyronApp
 */
angular.module('kyronApp')
  .controller('CrearFormacionAcademicaCtrl', function (formacionAcademicaServices) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var self = this;
    self.vista_previa = false;
    self.nueva_formacion_academica = null;
    self.gridOptions = {
      enableFiltering: true,
      enableSorting: true,
      enableRowSelection: true,
      enableRowHeaderSelection: false,
      columnDefs: [{
        field: 'InstitucionId.NombreInstitucion', displayName: 'Institución'
      },
      {
        field: 'ProgramaId.NombrePrograma', displayName: 'Programa'
      },
      {
        field: 'FechaInicio', displayName: 'Fecha Inicio', cellFilter: 'date:"yyyy-MM-dd"'
      },
      {
        field: 'FechaFinalizacion', displayName: 'Fecha Finalización', cellFilter: 'date:"yyyy-MM-dd"'
      },
      {
        field: 'Titulo.Nombre', displayName: 'Título'
      },
      ]
    };
    self.gridOptions.multiSelect = false;
    var get_formacion_academica = function () {
      formacionAcademicaServices.get('formacion_academica', 'limit=0').then(function (response) {
        self.gridOptions.data = response.data;
        console.log(self.gridOptions.data);
      });
    };

    var get_institucion = function () {
      formacionAcademicaServices.get('institucion', 'limit=0').then(function (response) {
        self.institucion = response.data;
      });
    };

    var get_programa = function () {
      formacionAcademicaServices.get('programa', 'limit=0').then(function (response) {
        self.programa = response.data;
      });
    };

    var get_titulo = function () {
      formacionAcademicaServices.get('titulo', 'limit=0').then(function (response) {
        self.titulo = response.data;
      });
    };
    get_formacion_academica();
    get_institucion();
    get_programa();
    get_titulo();

    self.gridOptions.onRegisterApi = function (gridApi) {
      self.gridApi = gridApi;
    };

    self.limpiar_seleccion = function () {
      self.vista_previa = !self.vista_previa;
      self.nueva_formacion_academica = null;
    };

    self.guardar = function () {
      formacionAcademicaServices.post('estudiante', self.nueva_formacion_academica)
        .then(function (response) {
          console.log(response);
          if (response.status === 201) {
            swal(
              'Buen trabajo!',
              'Añadió la formación con éxito',
              'success'
            );
            self.limpiar_seleccion();
            get_formacion_academica();
          }
        });
    };

  });
