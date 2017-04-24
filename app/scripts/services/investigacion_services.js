'use strict';

/**
 * @ngdoc service
 * @name kyronApp.investigacionServices
 * @description
 * # investigacionServices
 * Factory in the kyronApp.
 */
angular.module('kyronApp')
  .factory('investigacionServices', function () {
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
