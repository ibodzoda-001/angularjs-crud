(function (angular) {
    'use strict';

    const columnDefs = [
        {headerName: "Make", field: "make", filter: true, editable: true},
        {headerName: "Model", field: "model", filter: true, editable: true},
        {headerName: "Price", field: "price", filter: true, editable: true},
    ];

    function carsTableCtrl($scope) {

        this.$onInit = function () {
            $scope.carsIn = this.carsIn;
        };

        $scope.gridOptions = {
            columnDefs: columnDefs,
            rowData: [],
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
            if (event.target.className.substring(0, 7) === 'ag-cell') {
                $scope.isRowSelected = true;
                $scope.$apply();
            }
        });

        $scope.deleteRow = function () {
            const selected = $scope.gridOptions.api.getFocusedCell();
            $scope.gridOptions.rowData.splice(selected.rowIndex, 1);
            $scope.gridOptions.api.setRowData($scope.gridOptions.rowData);
            $scope.isRowSelected = false;
        };
    }

    angular.module('myApp.carsTable', ["agGrid"])
        .component('carsTable', {
            templateUrl: 'carsTable/carsTable.html',
            bindings: {
                carsIn: '='
            },
            controller: carsTableCtrl
        });

})(window.angular);