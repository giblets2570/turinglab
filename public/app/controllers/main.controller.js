angular.module('turingWeb').controller('MainController',['$scope','$document','$location','$timeout','$anchorScroll',MainController]);

function MainController($scope,$document,$location,$timeout,$anchorScroll){

    $scope.sections = [
        'overview',
        'teaching',
        'technology',
        'team',
        'laboratories'
        // 'contact'
    ];

    // $scope.locations = {};

    // $document.on('scroll', function() {
    //   console.log('Document scrolled to ', $document.scrollLeft(), $document.scrollTop());
    // });

    $scope.scroll = function(element){
        var section = element.id;
        $location.hash(section);
        $scope.$apply();
    };

    $scope.navClass = function(name){
        if ($location.hash() == name){
            return 'active';
        } else {
            return '';
        };
    };

    angular.element(document).ready(function(){
        $timeout(function(){
            $anchorScroll();
        });
    });

}