(function () {

  'use strict';
  var app;

  app = angular.module('diphi');
  app.controller('homeCtrl', ['$scope', '$state', '$stateParams', 'gallerySvc', '$log', function homeCtrl($scope, $state, $stateParams, gallerySvc, $log){
  	$scope.makeActive = function (keyword) {
  		document.getElementById("home").className = "";
  		document.getElementById("gallery").className = "";
  		document.getElementById("about").className = "";
  		document.getElementById("donate").className = "";
  		document.getElementById("contact").className = "";
  		document.getElementById(keyword).className = "active";
  	}

    $scope.goToGallery = function () {
      console.log("Gallery hit");
      $state.go('gallery');
    }

    gallerySvc.getGallery().then(function (data) {
      $scope.gallery = data;
      $scope.featuredIndex = _.random(0, $scope.gallery.length - 1);
      $scope.featuredPiece = $scope.gallery[$scope.featuredIndex];
      $scope.withoutFeatured = _.remove($scope.gallery, function (item) {
        return item.itemId != $scope.featuredPiece.itemId;
      });
      $scope.withoutFeatured = _.shuffle($scope.withoutFeatured);
      $scope.otherPieces = angular.copy([$scope.withoutFeatured[0], $scope.withoutFeatured[1], $scope.withoutFeatured[2]]);
    });

    
  }]);

  
  
}());