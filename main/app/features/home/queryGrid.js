'use strict';

angular.module('share.ws.demo')
    .directive('queryGrid',function(){
    return {
        scope : {
            searchQueryFields : '='
        },
        templateUrl:'app/features/home/queryGrid.html',
        controller :['$scope', function($scope){

            if(!$scope.searchQueryFields){
                $scope.searchQueryFields= [];
            }

            function QueryField(){
                var _self = this;
                _self.key = '';
                _self.operator = '';
                _self.value = '';
            }

            $scope.addQueryField = function(){
                $scope.searchQueryFields.push(new QueryField());
            };

            $scope.removeQueryField = function(field){
                var index = $scope.searchQueryFields.indexOf(field);
                if (index > -1) {
                    $scope.searchQueryFields.splice(index, 1);
                }
            }
        }]
    }
});