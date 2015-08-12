angular.module('turingWeb').controller('VideoController',['$scope','$sce',VideoController]);

function VideoController($scope,$sce){

    var videos = [{
        name: 'Code Campaign',
        summary: 'Hear from house-hold names on why your kids should learn to code',
        link: 'https://www.youtube.com/embed/Gjc6UX-BFks?rel=0&amp;start=0&amp;end=148&amp;autoplay=0&amp;iv_load_policy=3&amp;autohide=1&amp;cc_load_policy=0&amp;showinfo=0'
    },{
        name: 'BBC Newsnight',
        summary: 'Newsnight coverage on the UK government introducing programming to the curriculum',
        link: 'https://www.youtube.com/embed/-7x7GYItzS4?rel=0&amp;start=0&amp;end=331&amp;autoplay=0&amp;iv_load_policy=3&amp;autohide=1&amp;cc_load_policy=0&amp;showinfo=0'
    },{
        name: 'TED Conference',
        summary: 'TED: Technology Education Design, speaking about the new curriculum and the role of the big society in helping the government deliver this curriculum',
        link: 'https://www.youtube.com/embed/Ia55clAtdMs?rel=0&amp;start=0&amp;end=691&amp;autoplay=0&amp;iv_load_policy=3&amp;autohide=1&amp;cc_load_policy=0&amp;showinfo=0'
    },{
        name: 'The Hour of Code',
        summary: 'An american campaign run by code.org encouraging kids to learn to code, featuring Barak Obama',
        link: 'https://www.youtube.com/embed/rH7AjDMz_dc?rel=0&amp;start=0&amp;autoplay=0&amp;iv_load_policy=3&amp;autohide=1&amp;cc_load_policy=0&amp;showinfo=0'
    },{
        name: 'Karlie Kloss: Supermodel',
        summary: 'Supermodel Karlie Kloss has started learning to code, and she explains why.',
        link: 'https://www.youtube.com/embed/Bwiln7v0fdc?rel=0&amp;start=0&amp;autoplay=0&amp;iv_load_policy=3&amp;autohide=1&amp;cc_load_policy=0&amp;showinfo=0'
    },{
        name: 'An inspired 12 year old',
        summary: 'Tomas Suarez talks at TED about being an app developer, and his role in setting up a club at school to help others make apps',
        link: 'https://www.youtube.com/embed/Fkd9TWUtFm0?rel=0&amp;start=0&amp;autoplay=0&amp;iv_load_policy=3&amp;autohide=1&amp;cc_load_policy=0&amp;showinfo=0'
    }]

    // Make links safe for angular
    $scope.videos = [];
    angular.forEach(videos,function(video){
        video.link = $sce.trustAsResourceUrl(video.link);
        $scope.videos.push(video);
    });
    
};
