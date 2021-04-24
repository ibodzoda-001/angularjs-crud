'use strict';


agGrid.initialiseAgGridWithAngular1(angular);
// Declare app level module which depends on views, and core components
const myApp = angular.module('myApp', [
    'agGrid',
    'myApp.carForm',
    'myApp.carsTable',
]);

const cars = [
    {
        make: 'Toyota213123',
        model: 'Prius',
        price: '30.000$'
    },
    {
        make: 'Tesla',
        model: 'Model X',
        price: '100.000$'
    },
    {
        make: 'Nissan',
        model: 'GT-R',
        price: '50.000$'
    },
    {
        make: 'Toyota',
        model: 'Prius',
        price: '30.000$'
    },
    {
        make: 'Tesla',
        model: 'Model X',
        price: '100.000$'
    },
    {
        make: 'Nissan',
        model: 'GT-R',
        price: '50.000$'
    },
    {
        make: 'Toyota',
        model: 'Prius',
        price: '30.000$'
    },
    {
        make: 'Tesla',
        model: 'Model X',
        price: '100.000$'
    },
    {
        make: 'Nissan',
        model: 'GT-R',
        price: '50.000$'
    },
    {
        make: 'Toyota',
        model: 'Prius',
        price: '30.000$'
    },
    {
        make: 'Tesla',
        model: 'Model X',
        price: '100.000$'
    },
    {
        make: 'Nissan',
        model: 'GT-R',
        price: '50.000$'
    }
];

myApp.controller("myAppCtrl", function ($scope) {
    $scope.getCar = function(car) {
        cars.push(car);
    };

});