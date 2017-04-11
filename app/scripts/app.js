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
      .otherwise({
        redirectTo: '/'
      });
  }]);

angular.module('kyronApp').run(function ($rootScope) {

  $rootScope.id;









});