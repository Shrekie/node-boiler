var app = angular.module('nodeBoiler', ['ngRoute']);
app.config(function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', { 
    	controller: 'mainController'
    })
    .when('/app/me', {
    	controller:  'mainController'
    })
    .otherwise({ redirectTo: '/' });
});

app.controller('mainController', function($scope, $http) {

});