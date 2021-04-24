'use strict';


agGrid.initialiseAgGridWithAngular1(angular);
// Declare app level module which depends on views, and core components
const myApp = angular.module('myApp', [
    'agGrid',
    'myApp.carForm',
    'myApp.carsTable',
]);

myApp.controller("myAppCtrl", function ($scope) {
    $scope.cars = [
        {
            make: 'Toyota213123',
            model: 'Prius',
            price: '30.000$'
        },
        {
            make: 'Toyota',
            model: 'Prado',
            price: '320.000$'
        }
    ];

    $scope.getCar = function(car) {
        $scope.cars = [car, ...$scope.cars];
    };

});