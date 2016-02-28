(function () {

  'use strict';
  var app;

  app = angular.module("diphi");
  app.controller('itemModalCtrl', ['$scope', '$stateParams', '$log', 'item', '$modalInstance', function itemModalCtrl($scope, $stateParams, $log, item, $modalInstance){
  	
    $scope.item = item;
    $scope.close = function () {
      $modalInstance.dismiss('close');
    };


    
  }]);

  
  
}());