'use strict';

angular.module('myApp.carForm', ['ngRoute'])
    .component('carForm', {
        templateUrl: 'carForm/carForm.html',
        controller: 'carFormCtrl'
    })
    .controller('carFormCtrl', function ($scope) {
        $scope.make = "";
        $scope.model = "";
        $scope.price = "";

        $scope.addNewCarHandler = function() {
            console.log('salam');
        };
    });