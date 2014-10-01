var app = app || {};
app.service('WeatherService', function($q, Weather) {
        
        this.get = function() {

            var deferred = $q.defer();

            Weather.jsonp_query().$promise.then(
                function( datas ) {
                    deferred.resolve(datas);
                },
                function( error ) {
                    alert( "Erreur lors du chargement" );
                }
            );
            return deferred.promise;
       };
    });