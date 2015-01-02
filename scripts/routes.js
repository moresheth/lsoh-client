lsohApp.config( ['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'MainController'
		})
		.when('/images', {
			templateUrl: 'views/images/index.html',
			controller: 'MainController'
		})
		.when('/images/:image_id', {
			templateUrl: 'views/images/show.html',
			controller: 'ImageShowController',
			controllerAs: 'imageShowCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);
