var app = angular.module('app', ['ngRoute']);

// Controller 
app.controller('ServiceCtrl', function($scope){

    $scope.services = [
        {
            "title": "Responsive",
            "description": "Responsive Web app"
        },
        {
            "title": "Template & Theme",
            "description": "More than 1000+ Template & Theme"
        },
        {
            "title": "Support",
            "description": "Full Support 24 Hour"
        }
    ];

});

// Route
app.config(function($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl: "template/home.html",
        controller: 'ServiceCtrl'
    })
    .when('/about', {
        templateUrl: "template/about.html",
        controller: 'ServiceCtrl'
    })
    .when('/contact', {
        templateUrl: "template/contact.html",
        controller: 'ServiceCtrl'
    })
    .otherwise({
        redirectTo : "/"
    });

});