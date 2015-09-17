angular.module('turingWeb').directive('anchor',['$document',function($document){


    function link(scope,element,attrs){
        console.log(attrs.id);
        console.log(element,attrs);
        element = angular.element(element);
        console.log(element.prop('offsetTop'));
        console.log(scope.locations);

        // angular.element(document).ready(function(){
    
        //     var location = 0;
        //     while (element.offsetTop) {
        //         console.log(element,element.offsetTop);
        //         location += element.offsetTop;
        //         element = element.parent();
        //     };

        //     console.log(location);
            
        // });


    };

    return {
        restrict: 'AE',
        scope: {locations : "=locations"},
        link: link
    };

}]);