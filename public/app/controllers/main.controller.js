angular.module('turingWeb').controller('MainController',['$scope','$location','$anchorScroll',MainController]);

function MainController($scope,$location,$anchorScroll){

    $scope.scroll = function(location){
        $location.hash(location);
        $anchorScroll();
    }

    $scope.navClass = function(name){
        if ($location.hash() == name){
            return 'active';
        } else {
            return '';
        }
    }

}