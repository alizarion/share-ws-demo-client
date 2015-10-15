'use strict';

angular.module('share.ws.demo')
    .controller('HomeController', [
        '$scope',
        'FetchDataService',
        'ShareService',
        '$rootScope',
        function ($scope,
                  FetchDataService,
                  ShareService,
                  $rootScope) {
            $scope.myDefs = [];
            $scope.dataSource = [];
            $scope.myDefs = [];

            $scope.search = function (){

                ShareService.search(
                    $rootScope.searchRequest)
                    .then(function(response){
                        console.log(response)
                        $scope.dataSource = FetchDataService.extractValues(response.data);
                        $scope.translations = FetchDataService.extractTraduction(response.data);
                        $scope.dataSource = [];
                        var document  = $scope.dataSource[0];
                        for(var name in document) {
                            $scope.myDefs.push(
                                {
                                    field:name,
                                    displayName : $scope.translations[name] != null ? $scope.translations[name] : name
                                }
                            )

                        }

                    });
            };

            $scope.shareGridOptions = {
                data: 'dataSource',
                columnDefs: $scope.myDefs,
                enableFiltering: true
            };

        }]);
