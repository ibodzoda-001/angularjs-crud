'use strict';

angular.module('myApp.carForm', ['ngRoute'])
    .component('carForm', {
        templateUrl: 'carForm/carForm.html',
        controller: 'carFormCtrl',
        bindings: {
            carOut: "<"
        }
    })
    .controller('carFormCtrl', function ($scope) {
        $scope.clearCar = function() {
            $scope.make = "";
            $scope.model = "";
            $scope.price = "";
        };
        $scope.clearCar();
    });