angular.module('turingWeb').controller('LaboratoriesController',['$scope',LaboratoriesController]);

function LaboratoriesController($scope){

    $scope.heading = 'Laboratories';

    var numbers = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten'];
    var Price = function(cost,hours,number){
        return {
            cost: cost,
            hours: hours,
            number: numbers[number],
            hourly: cost / (hours * number)
        };
    };

    $scope.style = function(slots){
        if (slots.length === 2){
            return 'col-sm-6 col-xs-12';
        } else {
            return 'col-xs-12';
        };
    };

    $scope.labs = [
    {
        name: 'Weekdays',
        location: 'your local school',
        style: 'col-md-3 col-sm-6 col-xs-12',
        slots: [
            {
                name: 'After-School',
                content: 'KS3 & Python',
                time: '2 hours',
                prices: {
                    left: Price(150,2,10),
                    right: Price(20,2,1)
                }
            }
        ]
    },{
        name: 'Saturdays',
        location: 'Imperial College London',
        style: 'col-md-6 col-sm-12 col-xs-12',
        slots: [
            {
                name: 'Afternoon',
                content: 'KS3 & Python',
                time: '14.00 - 17.00',
                prices: {
                    left: Price(225,3,10),
                    right: Price(30,3,1)
                }
            },{
                name: 'Morning',
                content: 'KS2 & Scratch',
                time: '10.00 - 13.00',
                prices: {
                    left: Price(225,3,10),
                    right: Price(30,3,1)
                }
            }
        ]
    },{
        name: 'Workshops',
        location: 'your local school',
        style: 'col-md-3 col-sm-6 col-xs-12',
        slots: [
            {
                name: 'During-School',
                content: 'KS2 & KS3',
                time: '1-3 hours'
            }
        ],
        about: 'Contact Us',
        detail: 'Sometimes we offer these sessions for free'
    }
    ];

}