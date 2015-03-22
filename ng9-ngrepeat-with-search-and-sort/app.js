var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){

    $scope.people = [
        {
            name: "Annie Smith",
            age: 21,
            category: "Student"
        },
        {
            name: "Jack Johnson",
            age: 30,
            category: "Teacher"
        },
        {
            name: "Zelda McDonald",
            age: 90,
            category: "Teacher"
        },
        {
            name: "Sam Teal",
            age: 55,
            category: "Student"
        }
    ];

}]);