lsohApp.directive('imageList', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/views/image-list.html',
		controller: 'ImageListController',
		controllerAs: 'imageListCtrl'
	}
})

lsohApp.directive('imageItem', ['$http', function($http) {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/views/image-item.html',
		link: function(scope, element, attrs) {
			$http.get('/data/images/' + attrs.imageId + '.json').success( function(response) {
				scope.image = response
			})
		}
	}
}])

/*

Doesn't work

lsohApp.directive('userInfoSmall', ['$http', function($http) {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/views/user-info-small.html',
		link: function(scope, element, attrs) {
			console.log(element)
console.log(attrs)
			$http.get('/data/users/' + attrs.userId + '.json').success( function(response) {
				console.log( response )
				scope.user = response
			})
		}
	}
}])

*/