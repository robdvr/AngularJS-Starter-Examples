var app = angular.module('myApp', [
    'ngRoute'
]);

app.controller('HomeController', ['$scope', function($scope){

  $scope.title = "Home Page";

}]);

app.controller('AboutController', ['$scope', function($scope){

  $scope.title = "About Page";

}]);

app.config(['$routeProvider',
    function( $routeProvider ) {

        $routeProvider.when('/', {
            templateUrl: 'homepage.html',
            controller: 'HomeController'
        }).
        when('/about',{
            templateUrl: 'about.html',
            controller: 'AboutController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);
