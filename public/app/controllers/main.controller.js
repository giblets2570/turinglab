angular.module('turingWeb').controller('MainController',['$scope','$rootScope','$location','$timeout','$anchorScroll',MainController]);

function MainController($scope,$rootScope,$location,$timeout,$anchorScroll){

    $scope.sections = [
        'overview',
        'teaching',
        'technology',
        'team',
        'laboratories'
        // 'contact'
    ];

    $scope.scroll = function(section){
        $location.hash(section);
    };

    $scope.navClass = function(name){
        if ($location.hash() == name){
            return 'active';
        } else {
            return '';
        };
    };

    angular.element(document).ready(function(){
        console.log('Hello World');
        var section = $location.hash();
        // var element = angular.element(section);
        // console.log(section,element);
        console.log(section);
        $timeout(function(){
            $anchorScroll(section);
        });
    });

}