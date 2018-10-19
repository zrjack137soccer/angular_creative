/* global angular */

angular.module('lyricsLookup', [])
  .controller(
		'mainCtrl',
		function ($scope, $http) {
      $scope.lyrics = "Please search using an artist and title";

			$scope.getLyrics = function (info) {
        let url = `https://api.lyrics.ovh/v1/${info.artist}/${info.title}`;
        $http.get(url).then(
          function successCallback(response) {
            console.log(response);
            $scope.lyrics = response.data.lyrics;
          },
          function errorCallback(response) {
            console.log(response);
            $scope.lyrics = "Lyrics not found!";
          },
        );
			};
		},
	);
