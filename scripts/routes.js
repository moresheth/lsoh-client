lsohApp.config( ['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl : 'views/home.html',
			controller: 'MainController'
		})
		.when('/about', {
			templateUrl : 'views/about.html',
			controller: 'MainController'
		})
		.when('/contact', {
			templateUrl : 'views/contact.html',
			controller: 'MainController'
		})

	$locationProvider.html5Mode(true)
}])
