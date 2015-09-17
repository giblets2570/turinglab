angular.module('turingWeb').controller('TeamController',['$scope',TeamController]);

function TeamController($scope){

    $scope.heading = 'Team';

    $scope.team = [
        {
            name: 'Henry Miskin',
            image: 'assets/images/team/henrym.jpg',
            about: 'Henry wants to share his passion for problem solving in engineering and computing with upcoming inventors.',
            degrees : [{
                name: 'MSc Computer Science',
                university: ' Imperial College London'
            },{
                name: 'BEng Mechanical Engineering',
                university: 'University of Southampton'
            }],
            linkedin: 'https://uk.linkedin.com/in/hpgmiskin',
            email: 'mailto:hpgmiskin@turinglab.co.uk'
        // },{
        //     name: 'Tom Murray',
        //     image: 'assets/images/team/tom.jpg',
        //     degrees : [{
        //         name: 'MSc Computer Science',
        //         university: ' Imperial College London'
        //     },{
        //         name: 'MSc Applied Mathematics',
        //         university: "Queen's University Belfast"
        //     }],
        },{
            name: 'Sam Green',
            about: 'Sam looks forward to passing on an enthusiasm for design and technology to a new generation of innovators.',
            image: 'assets/images/team/sam.jpg',
            degrees : [{
                name: 'MSc Computer Science',
                university: ' Imperial College London'
            },{
                name: 'BA Architecture',
                university: 'University of Cambridge'
            }],
            linkedin: 'https://uk.linkedin.com/in/greensamuel',
            email: 'mailto:sam@turinglab.co.uk'
        },{
            name: 'Priyav Shah',
            about: 'Priyav is driven by getting kids excited about the power of technology',
            image: 'assets/images/team/priyav.jpg',
            degrees : [{
                name: 'MSc Computer Science',
                university: ' Imperial College London'
            },{
                name: 'BA Psychology',
                university: 'University of York'
            }],
            linkedin: 'https://www.linkedin.com/in/priyavshah91',
            email: 'mailto:priyav@turinglab.co.uk'
        },{
            name: 'Henry Lake',
            about: 'Henry enjoys bringing games to life through application of physics.',
            image: 'assets/images/team/henryl.jpg',
            degrees : [{
                name: 'MSc Computer Science',
                university: ' Imperial College London'
            },{
                name: 'MEng Physics',
                university: 'Imperial College London'
            }],
            // linkedin: 'https://uk.linkedin.com/in/hpgmiskin',
            email: 'mailto:henry@turinglab.co.uk'
        }
    ];

}