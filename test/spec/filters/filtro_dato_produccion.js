'use strict';

describe('Filter: filtroDatoProduccion', function () {

  // load the filter's module
  beforeEach(module('kyronApp'));

  // initialize a new instance of the filter before each test
  var filtroDatoProduccion;
  beforeEach(inject(function ($filter) {
    filtroDatoProduccion = $filter('filtroDatoProduccion');
  }));

  it('should return the input prefixed with "filtroDatoProduccion filter:"', function () {
    var text = 'angularjs';
    expect(filtroDatoProduccion(text)).toBe('filtroDatoProduccion filter: ' + text);
  });

});
