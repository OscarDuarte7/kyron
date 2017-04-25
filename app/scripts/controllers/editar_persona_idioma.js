'use strict';

/**
 * @ngdoc function
 * @name kyronApp.controller:EditarPersonaIdiomaCtrl
 * @description
 * # EditarPersonaIdiomaCtrl
 * Controller of the kyronApp
 */
angular.module('kyronApp')
  .controller('EditarPersonaIdiomaCtrl', function (personaIdiomaServices, $rootScope, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var self = this;
    self.id = $rootScope.id;
    self.vista_previa = false;
    self.idioma_actual = null;
    self.persona_idioma = {};
    self.gridOptions = {
      enableFiltering: true,
      enableSorting: true,
      enableRowSelection: true,
      enableRowHeaderSelection: false,
      columnDefs: [
      {
        field: 'Idioma.Nombre', displayName: 'Idioma', width: 200
      },
      {
        field: 'NivelIdioma.NombreNivel', displayName: 'Nivel', width: 300
      },
      ]
    };
    self.gridOptions.multiSelect = false;
    var get_persona_idioma = function () {
      personaIdiomaServices.get('persona_idioma', $.param({
        query:"Vigente:" + true,
        limit: 0
      })).then(function (response) {
        self.gridOptions.data = response.data;
        console.log(self.gridOptions.data);
      });
    };


  var get_idioma = function () {
      personaIdiomaServices.get('idioma', 'limit=0').then(function (response) {
        self.idioma = response.data;
      });
    };

    var get_nivel_idioma = function () {
      personaIdiomaServices.get('nivel_idioma', 'limit=0').then(function (response) {
        self.nivel_idioma = response.data;
      });
    };
    get_persona_idioma();
    get_idioma();
    get_nivel_idioma();


    self.gridOptions.onRegisterApi = function (gridApi) {
      self.gridApi = gridApi;
      gridApi.selection.on.rowSelectionChanged($scope, function (row) {
        self.idioma_actual = row.entity;
        if (self.idioma_actual !== null) {
          self.vista_previa = true;
        }
      });
    };

    self.limpiar_seleccion = function () {
      self.vista_previa = null;
    };


    self.guardar = function () {
      if(true){
      self.idioma_actual.FechaDato = new Date();
      personaIdiomaServices.put('persona_idioma', self.idioma_actual.Id, self.idioma_actual)
        .then(function (response) {
          if (response.data === 'OK') {
            get_persona_idioma();
            swal(
              'Buen trabajo!',
              'Se editó correctamente!',
              'success'
            );
            self.limpiar_seleccion();
          }
      });}
      else{
            swal(
              'No se ha podido editar!',
                'La información ya ha sido validada',
                'error'
            );
          self.limpiar_seleccion();
      }
    };
    self.eliminar = function () {

      swal({
        title: 'Está seguro?',
        text: "No podrá revertir esto!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Eliminar'
      }).then(function () {
       self.idioma_actual.FechaDato = new Date();
       self.idioma_actual.Vigente = false; 
       personaIdiomaServices.put('persona_idioma', self.idioma_actual.Id, self.idioma_actual)
          .then(function (response) {

            if (response.data === 'OK') {
              get_persona_idioma();
              self.limpiar_seleccion();
              swal(
                'Eliminado!',
                'El registro ha sido eliminado.',
                'success'
              );
            } else {
              swal(
                'No ha podido ser eliminado!',
                response.data,
                'error'
              );
            }
          });

      }).catch(swal.noop);
    };

  });
