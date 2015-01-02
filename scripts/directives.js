lsohApp.directive('imageList', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/views/image-list.html',
		controller: 'ImageListController',
		controllerAs: 'imageListCtrl'
	};
});

lsohApp.directive('imageItem', function() {
	return {
		restrict: 'E',
		replace: true,
		controller: 'ImageItemController',
		templateUrl: '/views/image-item.html',
		link: function(scope, element, attrs, imageItemCtrl) {
			imageItemCtrl.init( scope, element, attrs );
		}
	};
});
