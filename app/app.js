'use strict';

agGrid.initialiseAgGridWithAngular1(angular);
// Declare app level module which depends on views, and core components
const myApp = angular.module('myApp', [
    'agGrid',
    'myApp.carForm',
    'myApp.carsTable',
]);

myApp.controller("myAppCtrl", function ($scope) {

});