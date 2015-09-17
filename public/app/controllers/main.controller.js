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
        var section = $location.hash();
        $timeout(function(){
            $anchorScroll(section);
        });
    });

}