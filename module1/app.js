(function(){

'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){

//var list=this;

$scope.check=function(){

$scope.msg="";
//console.log('IN HERE');

//	console.log("items:",$scope.items);
var yy=$scope.items;

if(yy==undefined)
{
	$scope.msg="Please enter data first";
}
else
{

	var words=($scope.items).split(',');

	var x=words.length;
	if(x<=3&&x>=1)
	{
		$scope.msg="Enjoy!";
	}
	else if(x>=4)
	{
		$scope.msg="Too much!";
	}
}
	
}


}


})();