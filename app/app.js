(function () {

  'use strict';
  var app = angular.module('diphi', ['ui.router', 'ui.bootstrap', 'ui.bootstrap.modal']);


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

  app.config(['$stateProvider', 'modalStateProvider', '$urlRouterProvider', '$locationProvider', configRoutes]);

  function configRoutes ($stateProvider, modalStateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'homeCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'aboutCtrl'
      })
      .state('gallery', {
        url: '/gallery',
        templateUrl: 'app/gallery/gallery.html',
        controller: 'galleryCtrl'
      })
      .state('donate', {
        url: '/donate',
        templateUrl: 'app/donate/donate.html',
        controller: 'donateCtrl',
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'contactCtrl'
      })


    $urlRouterProvider.otherwise('/home');

    // $locationProvider.html5Mode({
    //   enabled: true
    // });

  };

  app.run(['$state', function ($state) {
  }]);

}());
