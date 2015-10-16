angular.module('share.ws.demo')
    .factory('CacheRequestService',[function() {
        var CACHED_REQUEST_KEY = 'share_ws_saved_request';

        function _save(searchRequest){
            localStorage.setItem(CACHED_REQUEST_KEY,angular.toJson(searchRequest));
        }

        function _load(){
            var searchRequest =
                angular.fromJson(localStorage.getItem(CACHED_REQUEST_KEY));

            if(!searchRequest) {
                searchRequest = {}
            }

            searchRequest.isComplete =  function(){
                return this.serviceUrl && this.maskID && this.userID ;
            };
            return searchRequest;
        }

        return {
            load : _load,
            save : _save
        }
    }]);