var app = angular.module('script', [])
    app.controller('mainCtrl', mainCtrl);
    app.directive('output', outputdirective);
    
    function mainCtrl ($scope, $http) {
        $scope.songs = [];
        
        $scope.songlyrics = function(form) { 
            var url = 'https://api.lyrics.ovh/v1/' + form.artist + '/' + form.title; 
            $http.get(url).then(function (response) {
                $scope.songs = response.data;
            });
        };
        $scope.songlyrics();
  }

    function outputdirective () {
        return {
            scope: {
                form: '='    
            },
            restrict: 'E',
            replace: 'true',
            template: (
                '<div class = "Lyrics">' +
                '<p>{{song.lyrics}}<p>' +
                '</div>'
            )
        };
    }