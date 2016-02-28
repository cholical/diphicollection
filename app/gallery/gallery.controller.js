(function () {

  'use strict';
  var app;

  app = angular.module("diphi");
  app.controller('galleryCtrl', ['$scope', '$stateParams', '$modal', 'gallerySvc', '$log', function galleryCtrl($scope, $stateParams, $modal, gallerySvc, $log){
  	gallerySvc.getGallery().then(function (data) {
  		console.log("Service called");
  		$scope.gallery = data;
  	})

  	//Dir-Pagination Control Variables
  	$scope.sortType = "itemName";
  	$scope.pageSize = 16;
  	$scope.currentPage = 1;

    $scope.itemModal = function (item) {
      var modalInstance = $modal.open({
        templateUrl: 'app/itemModal/itemModal.html',
        controller: 'itemModalCtrl',
        size: 'md',
        resolve: {
          item: function () {
            return item;
          }
        }
      });
    }
    
  }]);

  
  
}());