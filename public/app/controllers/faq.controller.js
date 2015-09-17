angular.module('turingWeb').controller('FaqController',['$scope',FaqController]);

function FaqController($scope){

    $scope.heading = 'FAQ';

    $scope.details = [
        {
            title: 'Why does my child need to code?',
            lines: [
                'Coding is awesome',
                'Coding is fun'
            ]
        },{
            title: 'Curriculum',
            lines: [
                'Projects are based on real-world scenarios closely linked to the National Curriculum pathways.',
                'TuringLab avoids teaching concepts in isolation by using real world examples which children can relate to. This ensures that children understand why they are learning, not just what.',
                'Integrating closely with the national curriculum complements children\'s learning at school while providing a foundation to explore exciting new projects.'
            ]
        },{
            title: 'Creativity',
            lines: [
                'We believe that learning should be fun, and have observed that when kids are being creative they are more engaged in the task at hand and develop a desire to learn more.',
                'We nurture kids\' natural creativity by incorporating subjects such as art, design, music and sport into our projects.',
                'We also extend the theme of creativity to problem solving and critical thinking where we encourage kids to explore a wide range of ideas and solutions.'
            ]
        }
    ];

}
