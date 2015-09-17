angular.module('turingWeb').controller('MainController',['$scope','$location','$timeout','$anchorScroll',MainController]);

function MainController($scope,$location,$timeout,$anchorScroll){

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
        return '';
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