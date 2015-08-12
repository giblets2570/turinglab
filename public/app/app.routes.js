app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        // .when('/euler/:problemNumber', {
        //     templateUrl : './app/components/euler/euler.html',
        //     controller: 'EulerController'
        // })
        .otherwise({
            templateUrl : 'app/partials/main.html',
            controller: 'MainController'
        })
}]);