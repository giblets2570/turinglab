angular.module('turingWeb').controller('MainController',['$scope','$location','$anchorScroll',MainController]);

function MainController($scope,$location,$anchorScroll){

    $scope.sections = [
        'overview',
        'teaching',
        'technology',
        'team',
        'laboratories'
        // 'contact'
    ];

    $scope.scrollDone = function(element){
        $location.hash(element.id);
        $scope.$apply();
    };

    $scope.navClass = function(name){
        if ($location.hash() == name){
            return 'active';
        } else {
            return '';
        }
    };

    // $scope.$on('$locationChangeSuccess', function() {
    //     console.log($location.hash());
    //     $anchorScroll();
    // });

}