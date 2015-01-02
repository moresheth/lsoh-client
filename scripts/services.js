lsohApp.factory('Image', ['$resource',
	function($resource) {
		return $resource('/data/images/:id.json', {}, {
			query: {
				method: 'GET',
				isArray: false
			}
		});
	}
]);

lsohApp.factory('User', ['$resource',
	function($resource) {
		return $resource('/data/users/:id.json', {}, {
			query: {
				method: 'GET',
				isArray: false
			}
		});
	}
]);
