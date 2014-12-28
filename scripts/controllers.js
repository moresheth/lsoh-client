lsohApp.controller('MainController', function(){
	// Global stuff here?
})

lsohApp.controller('ImageListController', ['$http', function ($http) {
	var self = this
	this.images = []
	$http.get('/data/lists/shops-all.json').success( function(response) {
		self.images = response.images
	})
}])
