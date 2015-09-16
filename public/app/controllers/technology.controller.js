angular.module('turingWeb').controller('TechnologyController',['$scope',TechnologyController]);

function TechnologyController($scope){

    $scope.heading = 'Technology';

    $scope.details = [
        {
            header: "Programming Environment",
            lines: [
                'We have developed an online platform that provides an intuitive way for children to complete projects using both scratch and python.',
                'Children work in an environment that gradually increases in complexity as their knowledge increases',
                'Starting from the simple scratch interface, the environment progresses to offer additional features, incorporating elements from professional platforms.'
            ]
        },
        {
            header: "Technology enabled Teaching",
            lines: [
                'Teachers spend a lot of their time marking, planning lessons, and lecturing to their kids.',
                'These are important aspects of education but we feel they reduce the amount of time available to teachers to focus on the needs of their class.',
                'Our system automates many of these time consuming activities, freeing up teachers to dedicate more of their attention to students.'
            ]
        },
        {
            header: "Advanced Functionality",
            lines: [
                'An essential part of programming is hacking together other people’s work, this allows you to do far more than you could hope to achieve alone.',
                'We don’t expect children to start using open-source software, but we still encourage them to tackle non-trivial problems',
                'The TuringLab team bridges this knowledge gap by providing some of this advanced functionality in a format that kids can readily understand.'
            ]
        }
    ];

}