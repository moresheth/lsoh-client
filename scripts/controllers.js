lsohApp.controller('MainController', function(){
	// Global stuff here?
});

lsohApp.controller('ImageShowController', [ '$http', '$routeParams', 'Image', 'User', function($http, $routeParams, Image, User){
	this.image = Image.get({ id: $routeParams.image_id }, function(image) {
		image.user = User.get({ id: image.user_id }, function(user) {});
	});
}]);


lsohApp.controller('ImageListController', function ($http) {
	var self = this;
	this.images = [];
	$http.get('/data/lists/shops-all.json').success( function(response) {
		self.images = response.images;
	});
});

lsohApp.controller('ImageItemController', [ '$http', 'Image', 'User', function ($http, Image, User) {
	this.image = {};

	this.init = function( scope, element, attrs ) {
		scope.image = Image.get({ id: attrs.imageId }, function(image) {
			image.user = User.get({ id: image.user_id }, function(user) {});
		});
	};
}]);
