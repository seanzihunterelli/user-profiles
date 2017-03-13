angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {


	// $scope.currentUser = friendService.getFriends().then(function(response){
	// 	return response.data.currentUser;
	// });
	// $scope.friends = friendService.getFriends().then(function(response){
	// 	return response.data.friends;
	// });


	friendService.getFriends().then(function(response){
		$scope.currentUser = response.data.currentUser;
		$scope.friends = response.data.friends;
	});
	// FIX ME - assign values to $scope.currentUser and $scope.friends
});
