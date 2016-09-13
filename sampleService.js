/**
 * Created by iupr0001 on 3/4/16.
 */

(function () {
  'use strict';

  angular
      .module('sampleModule')
      .factory('sampleService', sampleService);
  function sampleService() {

    return {
      helloWorld: function () {
          console.log('sampleService Invoked !! ');
      }
    };
  };
})();

