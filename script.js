/* global angular */

angular.module('lyricsLookup', [])
  .controller(
		'mainCtrl',
		function ($scope, $http) {

			$scope.getLyrics = function (info) {
        let url = `https://api.lyrics.ovh/v1/${info.artist}/${info.song}`;
        $http.get(url).then(
          function successCallback(response) {
            console.log(response);
            $scope.lyrics = response.data.lyrics;
          },
          function errorCallback(response) {
            console.log(response);
          },
        );
			};
		},
	);
