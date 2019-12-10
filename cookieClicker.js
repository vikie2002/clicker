var app = angular.module('incremental', [
  'ngRoute'
]);

app.controller('IncCtrl',[function IncCtrl($scope, $interval){
		$scope.numCookies = 100;
	   $scope.numPerson = 0;
	   $scope.numCursor = 0;
	   $scope.numFactory = 0;
	   $scope.numMachine = 0;
	   $scope.PersonCost = 10;
	   $scope.CursorCost = 15;
	   $scope.FactoryCost = 50;
	   $scope.MachineCost = 100;
	   
	   $scope.Cookies = function() {
		   $scope.numCookies++;
	   }
	   	   $scope.hirePerson = function() {
		   $scope.numPerson++;
	   $scope.numCookies -= $scope.PersonCost;
	   $scope.PersonCost = math.ceil($scope.PersonCost * 1.1);
	   }
	   
	   $scope.hireCursor = function() {
		   $scope.numCursor++;
	   $scope.numCookies -= $scope.CursorCost;
	   $scope.CursorCost = math.ceil($scope.CursorCost * 1.1);
	   }
	   
	   $scope.hireFactory = function() {
		   $scope.numFactory++;
	   $scope.numCookies -= $scope.FactoryCost;
	   $scope.FactoryCost = math.ceil($scope.FactoryCost * 1.1);
	   }
	   
	    $scope.hireMachine = function() {
		   $scope.numFactory++;
	   $scope.numCookies -= $scope.MachineCost;
	   $scope.MachineCost = math.ceil($scope.MachineCost * 1.1);
	   }
	   

	   
	   $interval(function() {
		   console.log("here");
		   $scope.Cookies +=($scope.numPerson * 1 / 100);
		   $scope.Cookies +=($scope.numCursor * 3 / 100);
		   $scope.Cookies +=($scope.numFactory * 5 / 100);
		   $scope.Cookies +=($scope.numMachine * 1 / 100);
	   }, 10);
}]);