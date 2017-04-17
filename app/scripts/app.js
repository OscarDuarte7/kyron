'use strict';

/**
 * @ngdoc overview
 * @name kyronApp
 * @description
 * # kyronApp
 *
 * Main module of the application.
 */
angular
  .module('kyronApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'afOAuth2',
    'treeControl',
    'ngMaterial',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.rowEdit',
    'ui.grid.cellNav',
    'ui.grid.treeView',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ngStorage',
    'ngWebSocket',
    'angularMoment',
    'ui.utils.masks',
    'pascalprecht.translate'
  ])
  .run(function (amMoment) {
    amMoment.changeLocale('es');
  })
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/notificaciones', {
        templateUrl: 'views/notificaciones.html',
        controller: 'NotificacionesCtrl',
        controllerAs: 'notificaciones'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/crear_formacion_academica', {
        templateUrl: 'views/crear_formacion_academica.html',
        controller: 'CrearFormacionAcademicaCtrl',
        controllerAs: 'crearFormacionAcademica'
      })
      .when('/editar_formacion_academica', {
        templateUrl: 'views/editar_formacion_academica.html',
        controller: 'EditarFormacionAcademicaCtrl',
        controllerAs: 'editarFormacionAcademica'
      })
      .when('/consultar_formacion_academica', {
        templateUrl: 'views/consultar_formacion_academica.html',
        controller: 'ConsultarFormacionAcademicaCtrl',
        controllerAs: 'consultarFormacionAcademica'
      })
      .when('/crear_experiencia_laboral', {
        templateUrl: 'views/crear_experiencia_laboral.html',
        controller: 'CrearExperienciaLaboralCtrl',
        controllerAs: 'crearExperienciaLaboral'
      })
      .when('/editar_experiencia_laboral', {
        templateUrl: 'views/editar_experiencia_laboral.html',
        controller: 'EditarExperienciaLaboralCtrl',
        controllerAs: 'editarExperienciaLaboral'
      })
      .when('/consultar_experiencia_laboral', {
        templateUrl: 'views/consultar_experiencia_laboral.html',
        controller: 'ConsultarExperienciaLaboralCtrl',
        controllerAs: 'consultarExperienciaLaboral'
      })
      .when('/crear_produccion_academica', {
        templateUrl: 'views/crear_produccion_academica.html',
        controller: 'CrearProduccionAcademicaCtrl',
        controllerAs: 'crearProduccionAcademica'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

angular.module('kyronApp').run(function ($rootScope) {

  $rootScope.id =123;









});