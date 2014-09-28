var AgileGrenobleApp = angular.module('FamousUIApp', ['famous.angular'])
	.controller('FamousUICtrl', function($scope, $famous) {
		this.rangeValue = 20;

		$scope.squares = [
		 {
		 	'name': '1',
		 	'x' : 10,
		 	'y' : 10
		 },
		 {
		 	'name': '1',
		 	'x' : 30,
		 	'y' : 40
		 },
		 {
		 	'name': '1',
		 	'x' : 50,
		 	'y' : 160
		 },
		 {
		 	'name': '1',
		 	'x' : 30,
		 	'y' : 40
		 },
		 {
		 	'name': '1',
		 	'x' : 50,
		 	'y' : 160
		 },
		 {
		 	'name': '1',
		 	'x' : 30,
		 	'y' : 40
		 },
		 {
		 	'name': '1',
		 	'x' : 50,
		 	'y' : 160
		 }
		];


		this.translateX = function(x) {
			return (this.rangeValue*x/100)*30;
		}

		var Transitionable = $famous['famous/transitions/Transitionable'];
	    var SpringTransition = $famous['famous/transitions/SpringTransition'];
	    Transitionable.registerMethod('spring', SpringTransition);

	    var spring = {
	      method: 'spring',
	      period: 1000,
	      dampingRatio: 0.3
	    };
	    var indexClick = 0;
	    $scope.bouncy = new Transitionable([0,0,0]);
	    $scope.buttonFlyDown = function(){
	    	if( indexClick == 0) {
		    	$scope.bouncy.set([200, 200, 0], {method : 'spring', dampingRatio : 0.5, period : 500});
		    	indexClick++;
		    } else if( indexClick == 1) {
		    	$scope.bouncy.set([800, 200, 0], {method : 'spring', dampingRatio : 0.5, period : 1000});
		    	indexClick++;
		    } else {
		  		$scope.bouncy.set([40*indexClick, 50*(indexClick+3), 0], {method : 'spring', dampingRatio : 0.5, period : 1000});  	
		  		indexClick++;
		    }
	      
	    };

});

