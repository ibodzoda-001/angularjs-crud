'use strict';

const cars = [
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
const columnDefs = [
    {headerName: "Make", field: "make", filter: true, editable: true},
    {headerName: "Model", field: "model", filter: true, editable: true},
    {headerName: "Price", field: "price", filter: true, editable: true},
    {
        headerName: "Action",
        field: "action",
        cellRenderer: (params) => '<div class="float-end"><button ng-click="editCarHandler(params)" class="btn btn-outline-secondary btn-sm"><i class="fas fa-pencil-alt"></i></button><button ng-click="deleteCarHandler(params)" style="margin-left: 10px" class="btn btn-outline-danger btn-sm"><i class="fas fa-trash"></i></button></div>'
    },
];

const carsTable = angular.module('myApp.carsTable', ["agGrid"])
    .component('carsTable', {
        templateUrl: 'carsTable/carsTable.html',
    });

carsTable.controller("carsTableCtrl", function ($scope) {
    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: cars,
        pagination: true,
        suppressCellSelection: true,
        paginationAutoPageSize: true,
        onGridReady: function (params) {
            params.api.sizeColumnsToFit();
        }
    };
});