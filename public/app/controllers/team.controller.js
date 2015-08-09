angular.module('turingWeb').controller('TeamController',['$scope',TeamController]);

function TeamController($scope){

    $scope.team = 

    [{
        name: 'Henry Miskin',
        image: 'assets/images/team/henrym.jpg',
        degrees : [{
            name: 'MSc Computer Science',
            university: ' Imperial College London'
        },{
            name: 'BEng Mechanical Engineering',
            university: 'University of Southampton'
        }],
        linkedin: 'https://uk.linkedin.com/in/hpgmiskin'
    },{
        name: 'Tom Murray',
        image: 'assets/images/team/tom.jpg',
        degrees : [{
            name: 'MSc Computer Science',
            university: ' Imperial College London'
        },{
            name: 'MSc Applied Mathematics',
            university: "Queen's University Belfast"
        }],
        linkedin: 'https://uk.linkedin.com/pub/tom-murray/b3/745/253',
    },{
        name: 'Sam Green',
        image: 'assets/images/team/sam.jpg',
        degrees : [{
            name: 'MSc Computer Science',
            university: ' Imperial College London'
        },{
            name: 'BA Architecture',
            university: 'University of Cambridge'
        }],
        linkedin: 'https://uk.linkedin.com/in/greensamuel'
    },{
        name: 'Priyav Shah',
        image: 'assets/images/team/priyav.jpg',
        degrees : [{
            name: 'MSc Computer Science',
            university: ' Imperial College London'
        },{
            name: 'BA Psychology',
            university: 'University of York'
        }],
        linkedin: 'https://uk.linkedin.com/in/priyavshah91'
    },{
        name: 'Henry Lake',
        image: 'assets/images/team/henryl.jpg',
        degrees : [{
            name: 'MSc Computer Science',
            university: ' Imperial College London'
        },{
            name: 'MEng Physics',
            university: 'Imperial College London'
        }]
    }];

}