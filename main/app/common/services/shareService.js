angular.module('share.ws.demo')
    .factory('ShareService',['$http','CacheRequestService', function($http,CacheRequestService) {

        function _search(searchRequest){
            CacheRequestService.save(searchRequest);
            return  $http({
                method:'GET',
                url : searchRequest.serviceUrl,
                params:{
                    mask: searchRequest.maskID,
                    user: searchRequest.userID,
                    query : searchRequest.query
                }
            })
        }

        return {
            search : _search
        }
    }]);