(function() {
  'use strict';

  angular
    .module('nproject3')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
