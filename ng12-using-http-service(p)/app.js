var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', '$http', function ($scope, $http) {

    $http.get('people.json').success(function(data){
        $scope.people = data;
    });

}]);