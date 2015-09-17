angular.module('turingWeb').directive('price',function(){

    return {
        restrict: 'AE',
        templateUrl: 'app/directives/price.html',
        scope: { price: '=price' }
    };

});