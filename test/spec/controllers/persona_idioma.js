'use strict';

describe('Controller: PersonaIdiomaCtrl', function () {

  // load the controller's module
  beforeEach(module('kyronApp'));

  var PersonaIdiomaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonaIdiomaCtrl = $controller('PersonaIdiomaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PersonaIdiomaCtrl.awesomeThings.length).toBe(3);
  });
});
