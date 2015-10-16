
'use strict';
angular.module('share.ws.demo')
    .factory('FetchDataService',function() {
        function _extractTraduction(data){
            var i = 0;
            var trads ={};
            angular.forEach(data.header.columnsHeader,function(column){
                trads[column.code] = data.documents[0].fields[i].translation;
                i++
            });
            return trads;
        }




        function _extractValues(data){
            var documents = [];
            data.documents.forEach(function(document){
                var newDocument =  {};
                newDocument.docIdxGed = document.docIdxGed;
                var i = 0;
                angular.forEach(document.fields,function(field){
                    newDocument[data.header.columnsHeader[i].code] = field.value;
                    i++;
                });
                documents.push(newDocument);
            });
            return documents;
        }




        return {
            extractTraduction:_extractTraduction,
            extractValues:_extractValues
        }


    });