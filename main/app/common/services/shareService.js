angular.module('share.ws.demo')
    .factory('ShareService',['$http','CacheRequestService', function($http,CacheRequestService) {

        function _getQueryFromQueryFields(fields){
            var query = [];
            fields.forEach(function(field){
                query = query  + ((query.length == 0 )? field.key + field.operator + field.value  : ';'+field.key + field.operator + field.value);
            });
            return query;
        }

        function _search(searchRequest){
            CacheRequestService.save(searchRequest);
            return  $http({
                method:'GET',
                url : searchRequest.serviceUrl,
                params:{
                    mask: searchRequest.maskID,
                    user: searchRequest.userID,
                    query : _getQueryFromQueryFields(searchRequest.query)
                }
            })
        }

        return {
            search : _search
        }
    }]);