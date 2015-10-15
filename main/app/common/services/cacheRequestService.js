angular.module('share.ws.demo')
    .factory('CacheRequestService',[function() {
        var CACHED_REQUEST_KEY = 'share_ws_saved_request';

        function _save(searchRequest){
            localStorage.setItem(CACHED_REQUEST_KEY,angular.toJson(searchRequest));
        }

        function _load(){
            var searchRequest  = angular.fromJson(localStorage.getItem(CACHED_REQUEST_KEY));
            if(searchRequest !== null && typeof searchRequest !== 'undefined'){
                return angular.fromJson(localStorage.getItem(CACHED_REQUEST_KEY));
            } else {
                return {}
            }

        }

        return {
            load : _load,
            save : _save
        }
    }]);