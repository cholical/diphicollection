(function () {

  "use strict";
  var app;
  app = angular.module('diphi');

  app.factory('gallerySvc', ['$http', '$log', function gallerySvc($http, $log) {

    var getGallery = function () {
        return $http.get('json/sample.json').then(function (response) {
          return response.data;
      });     
    }


    return {
      getGallery: getGallery,
    };
  }]);

}());
