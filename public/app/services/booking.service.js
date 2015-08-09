angular.module('turingWeb').factory('Booking',['$resource',Booking]);

function Booking($resource){
    return $resource('/api/booking/:bookingId',{bookingId:'@_id'});
}