var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){

  $scope.showAlert = function() {
    alert("Show Alert!");
  };

}]);