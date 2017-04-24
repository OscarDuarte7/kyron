'use strict';

/**
 * @ngdoc service
 * @name kyronApp.idiomasServices
 * @description
 * # idiomasServices
 * Factory in the kyronApp.
 */
angular.module('kyronApp')
  .factory('idiomasServices', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
