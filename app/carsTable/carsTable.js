'use strict';

const carsTable = angular.module('myApp.carsTable', ["agGrid"])
    .component('carsTable', {
        templateUrl: 'carsTable/carsTable.html',
    });

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
];

carsTable.controller("carsTableCtrl", function ($scope) {

    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: cars,
        pagination: true,
        suppressCellSelection: true,
        paginationAutoPageSize: true,
        rowSelection: 'single',
        onGridReady: function (params) {
            params.api.sizeColumnsToFit();
        }
    };
    $scope.isRowSelected = false;

    document.addEventListener('click', function (event) {
        if(event.target.className.substring(0, 7) === 'ag-cell') {
            $scope.isRowSelected = true;
            $scope.$apply();
        }
    });

    $scope.deleteRow = function deleteRow() {
        const selected = $scope.gridOptions.api.getFocusedCell();
        $scope.gridOptions.rowData.splice(selected.rowIndex, 1);
        $scope.gridOptions.api.setRowData($scope.gridOptions.rowData);
        $scope.isRowSelected = false;
    };
});