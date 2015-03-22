var app = angular.module('myApp', [
  'ngRoute'
]);

app.controller('PeopleController', ['$scope', '$http', function ($scope, $http) {

    $http.get('people_list.json').success(function(data){
        $scope.people = data;
    });

}]);
app.controller('PersonDetailController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $scope.person = $routeParams.id;

}]);

app.config(
    ['$routeProvider', function($routeProvider){
        $routeProvider.when('/people', {
            templateUrl: 'people.html',
            controller: 'PeopleController'
        }).
        when('/person/:id', {
            templateUrl: 'single_person.html',
            controller: 'PersonDetailController'
        }).
        otherwise({
            redirectTo: '/people'
        });
    }]
);