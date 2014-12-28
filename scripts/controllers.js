lsohApp.controller('MainController', function(){
	// Global stuff here?
})

lsohApp.controller('ImageShowController', function($routeParams){
	this.image_id = $routeParams.image_id;
})


lsohApp.controller('ImageListController', ['$http', function ($http) {
	var self = this
	this.images = []
	$http.get('/data/lists/shops-all.json').success( function(response) {
		self.images = response.images
	})
}])

lsohApp.controller('ImageItemController', ['$http', function ($http) {
	var self = this
	this.image = {}

	this.init = function( scope, element, attrs ) {
		$http.get('/data/images/' + attrs.imageId + '.json', { cache: true }).success( function(response) {
			scope.image = response
			$http.get('/data/users/' + scope.image.user_id + '.json', { cache: true }).success( function(res) {
				scope.image.user = res
			})
		})
	};
}])
