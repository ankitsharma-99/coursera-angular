(function(){

'use strict';

angular.module('ShopApp',[])
.controller('ShopController',ShopController);
//.controller('ShopController2',ShopController2);
//.service('ShopService',ShopService);


ShopController.$inject=['$scope'];

function ShopController($scope){



var items1=[];
items1.push({
	name:'cookies',
	quantity:10
});

items1.push({
	name:'chips',
	quantity:20
});

items1.push({
	name:'coke',
	quantity:5
});

items1.push({
	name:'kurkure',
	quantity:30
});

items1.push({
	name:'pepsi',
	quantity:50
});

//console.log("items1:",items1);

$scope.items1=items1;

//var items2=[];
$scope.items2=[];


$scope.remove=function(itemIndex){

$scope.items2.push($scope.items1[itemIndex]);
$scope.items1.splice(itemIndex,1);


}

$scope.isEmpty1=function(){
	if($scope.items1.length==0)
	return true;
	else
		return false;
}

$scope.isEmpty2=function(){
	if($scope.items2.length==0)
	return true;
	else
		return false;
}


//console.log("items2:",items2);

}






})();