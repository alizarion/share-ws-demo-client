angular.module('share.ws.demo')
    .factory('ShareService',['$http','CacheRequestService','$rootScope',
        function($http,CacheRequestService,$rootScope) {

        function _getQueryFromQueryFields(fields){
            var query = [];
            fields.forEach(function(field){
                query = query  + ((query.length == 0 )? field.key + field.operator + field.value  : ';'+field.key + field.operator + field.value);
            });
            return query;
        }

        function _search(searchRequest){
            CacheRequestService.save(searchRequest);
            var queryField = _getQueryFromQueryFields(searchRequest.query);
            console.log(queryField);
            $rootScope.lastRequestURL = searchRequest.serviceUrl +
                '?mask='+searchRequest.maskID+
                '&user='+searchRequest.userID+ (queryField.length > 0 ? '&query='+queryField :'');

            return  $http({
                method:'GET',
                url : searchRequest.serviceUrl,
                params:{
                    mask: searchRequest.maskID,
                    user: searchRequest.userID,
                    query : queryField
                }
            })
        }

        return {
            search : _search
        }
    }]);