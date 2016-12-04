(function() {
  'use strict';

  angular
    .module('kddcup-data-viewer')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
