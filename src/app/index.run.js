(function() {
  'use strict';

  angular
    .module('webstorm')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
