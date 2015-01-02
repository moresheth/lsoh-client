lsohApp.factory('Image', ['$resource',
	function($resource) {
		return $resource('/data/images/:id.json', {}, {
			get: {
				cache: true
			}
		});
	}
]);

lsohApp.factory('User', ['$resource',
	function($resource) {
		return $resource('/data/users/:id.json', {}, {
			get: {
				cache: true
			}
		});
	}
]);
