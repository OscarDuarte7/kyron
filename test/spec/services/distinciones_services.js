'use strict';

describe('Service: distincionesServices', function () {

  // load the service's module
  beforeEach(module('kyronApp'));

  // instantiate service
  var distincionesServices;
  beforeEach(inject(function (_distincionesServices_) {
    distincionesServices = _distincionesServices_;
  }));

  it('should do something', function () {
    expect(!!distincionesServices).toBe(true);
  });

});
