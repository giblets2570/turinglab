angular.module('turingWeb').factory('Term',['$resource',Term]);

function Term($resource){
    return $resource('/api/term/:termId',{termId:'@_id'});
}