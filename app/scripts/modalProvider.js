(function () {
	'use strict'
	var app = angular.module('diphi');

	app.provider('modalState', function($stateProvider) {
    var provider = this;
    this.$get = function() {
        return provider;
    }
    this.state = function(stateName, options) {
        var modalInstance;
        $stateProvider.state(stateName, {
            url: options.url,
            onEnter: function($modal, $state) {
                modalInstance = $modal.open(options);
                modalInstance.result.then(
                  function () {

                  },
                  function() {
                    $state.go('^');

                  })
                ['finally'](function() {
                    modalInstance = null;
                    // if ($state.$current.name === stateName) {
                    //     $state.go('^');
                    // }
                });
            },
            onExit: function() {
                if (modalInstance) {
                    modalInstance.close();
                }
            }
        });
    };
  })

}());