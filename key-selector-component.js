/*!
 * Key Selector component.
 *
 * Copyright (c) 2014-2016 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
define([], function() {

'use strict';

function register(module) {
  module.component('brKeySelector', {
    bindings: {
      identity: '<brIdentity',
      keys: '<brKeys',
      selected: '<?brSelected',
      onSelect: '&brOnSelect',
      fixed: '<?brFixed'
    },
    controller: Ctrl,
    templateUrl: requirejs.toUrl('bedrock-angular-key/key-selector.html')
  });
}

/* @ngInject */
function Ctrl($scope) {
  var self = this;
}

return register;

});
