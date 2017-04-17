'use strict';

describe('Controller: ConsultarExperienciaLaboralCtrl', function () {

  // load the controller's module
  beforeEach(module('kyronApp'));

  var ConsultarExperienciaLaboralCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConsultarExperienciaLaboralCtrl = $controller('ConsultarExperienciaLaboralCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConsultarExperienciaLaboralCtrl.awesomeThings.length).toBe(3);
  });
});
