var app = app || {};
app.factory('Weather', ['$resource', '$http', function($resource, $http) {
	return $resource('http://api.openweathermap.org/data/2.5/weather?q=Grenoble,fr', 
			{
            	callback: "JSON_CALLBACK"
        	}, 
        	{
		    	jsonp_query: {
		        	method: 'JSONP'
		    	} 
		    }
		 );
	}]);