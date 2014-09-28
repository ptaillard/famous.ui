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
		 	'x' : 80,
		 	'y' : 40
		 },
		 {
		 	'name': '1',
		 	'x' : 110,
		 	'y' : 160
		 },
		 {
		 	'name': '1',
		 	'x' : 130,
		 	'y' : 40
		 },
		 {
		 	'name': '1',
		 	'x' : 150,
		 	'y' : 160
		 }
		];


		this.translateX = function(x) {
			return (this.rangeValue*x/100)*10;
		}

		var Transitionable = $famous['famous/transitions/Transitionable'];
	    var SpringTransition = $famous['famous/transitions/SpringTransition'];
	    Transitionable.registerMethod('spring', SpringTransition);

	    var spring = {
	      method: 'spring',
	      period: 1000,
	      dampingRatio: 0.3
	    };

	    $scope.bouncy = new Transitionable([0,0,0]);
	    $scope.buttonFlyDown = function(){
	    	$scope.bouncy.set([800*Math.random(), 800*Math.random(), 10*Math.random()], {method : 'spring', dampingRatio : 0.5, period : Math.random()*2000});
	    };

	    $scope.getColor = function() {
	    	return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	    }

});

