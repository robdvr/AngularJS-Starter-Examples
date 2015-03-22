var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){

    $scope.people = [
        {
            name: "Annie Smith",
            age: 21,
            category: "Student",
            image: "images/image1.jpg"
        },
        {
            name: "Jack Johnson",
            age: 30,
            category: "Teacher",
            image: "images/image2.jpg"
        },
        {
            name: "Zelda McDonald",
            age: 90,
            category: "Teacher",
            image: "images/image3.jpg"
        },
        {
            name: "Sam Teal",
            age: 55,
            category: "Student",
            image: "images/image4.jpg"
        }
    ];

}]);