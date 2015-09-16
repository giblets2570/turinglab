angular.module('turingWeb').controller('LaboratoriesController',['$scope',LaboratoriesController]);

function LaboratoriesController($scope){

    $scope.heading = 'Laboratories';

    $scope.labs = [
    {
        name: 'Saturdays',
        location: 'Imperial College London',
        style: 'col-md-6 col-xs-12',
        slots: [
            {
                name: 'Afternoon',
                content: 'KS3 & Python',
                time: '14.00 - 17.00'
            },{
                name: 'Morning',
                content: 'KS2 & Scratch',
                time: '10.00 - 13.00'
            }
        ],
        prices: [
            {
                cost: '£225',
                about: '10 Sessions',
                hourly: '£7.50'
            },{
                cost: '£30',
                about: '1 Session',
                hourly: '£10.00'
            }
        ]
    },{
        name: 'Weekdays',
        location: 'your local school',
        style: 'col-md-3 col-xs-12',
        slots: [
            {
                name: 'After-School',
                content: 'KS3 & Python',
                time: '2 hours'
            }
        ],
        prices: [
            {
                cost: '£150',
                about: '10 Sessions',
                hourly: '£7.50'
            },{
                cost: '£20',
                about: '1 Session',
                hourly: '£10.00'
            }
        ]
    },{
        name: 'Workshop',
        location: 'your local school',
        style: 'col-md-3 col-xs-12',
        slots: [
            {
                name: 'During-School',
                content: 'KS2 & KS3',
                time: '1-3 hours'
            }
        ],
        about: 'Contact Us'
    }
    ];

}