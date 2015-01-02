lsohApp.controller('MainController', function(){
	// Global stuff here?
});

lsohApp.controller('ImageShowController', function($http, $routeParams){
	var self = this;
	this.image = {};
	$http.get('/data/images/' + $routeParams.image_id + '.json', { cache: true }).success( function(response) {
		self.image = response;
		$http.get('/data/users/' + self.image.user_id + '.json', { cache: true }).success( function(res) {
			self.image.user = res;
		});
	});
});
/*
// Factory version of above, doesn't completely work.

lsohApp.controller('ImageShowController', [ '$http', '$routeParams', 'Image', 'User', function($http, $routeParams, Image, User){
	var self = this;
	this.image = Image.get({ id: $routeParams.image_id }, function(image) {
		self.image.user = User.get({ id: self.image.user_id }, function(user) {});
	});
}]);
*/

lsohApp.controller('ImageListController', function ($http) {
	var self = this;
	this.images = [];
	$http.get('/data/lists/shops-all.json').success( function(response) {
		self.images = response.images;
	});
});

lsohApp.controller('ImageItemController', function ($http) {
	var self = this;
	this.image = {};

	this.init = function( scope, element, attrs ) {
		$http.get('/data/images/' + attrs.imageId + '.json', { cache: true }).success( function(response) {
			scope.image = response;
			$http.get('/data/users/' + scope.image.user_id + '.json', { cache: true }).success( function(res) {
				scope.image.user = res;
			});
		});
	};
});
