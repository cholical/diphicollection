(function () {

  "use strict";
  var app;
  
  app = angular.module('diphi');

  app.factory('dataPassingSvc', ['$http', '$log', function dataPassingSvc($http, $log) {
    
    var useless = function () {
      return "This Function is Useless";
    }
    

    return {
      useless: useless,
     
    };
  }]);
  
}());