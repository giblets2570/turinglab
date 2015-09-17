angular.module('turingWeb').controller('TeachingController',['$scope',TeachingController]);

function TeachingController($scope){

    $scope.heading = 'Teaching';

    $scope.details = [
        {
            title: 'Curriculum',
            lines: [
                'Projects are based on real-world scenarios closely linked to the National Curriculum pathways.',
                'TuringLab avoids teaching concepts in isolation by using real world examples which children can relate to. This ensures that children understand why they are learning, not just what.',
                'Integrating closely with the national curriculum complements children\'s learning at school while providing a foundation to explore exciting new projects.'
            ]
        },{
            title: 'Coding',
            lines: [
                'Coding is a fundamental skill in today\'s world, and is at the heart of all the projects undertaken.',
                'We teach the basics of coding using a visual programming language - Scratch.',
                'Children progress onto Python - a text based programming language used across a wide range of industries.'
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