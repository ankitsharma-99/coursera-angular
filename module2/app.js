(function(){

'use strict';

angular.module('ShopApp',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){

	var list1=this;
	
	list1.items=ShoppingListCheckOffService.getItems1();
	

	list1.remove=function(itemIndex){
		ShoppingListCheckOffService.remove(itemIndex);
	}
	list1.isEmpty=function(){
		return ShoppingListCheckOffService.isEmpty(list1.items);
	}

}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){

	var list2=this;
	list2.items=ShoppingListCheckOffService.getItems2();
	
	list2.isEmpty=function(){
		return ShoppingListCheckOffService.isEmpty(list2.items);
	}
}












function ShoppingListCheckOffService(){

var service=this;

service.items1=[];
service.items2=[];
service.items1.push({
	name:'cookies',
	quantity:10
});

service.items1.push({
	name:'chips',
	quantity:20
});

service.items1.push({
	name:'coke',
	quantity:5
});

service.items1.push({
	name:'kurkure',
	quantity:30
});

service.items1.push({
	name:'pepsi',
	quantity:50
});

service.remove=function(itemIndex){

service.items2.push(service.items1[itemIndex]);
service.items1.splice(itemIndex,1);

}

service.getItems1=function(){
	return service.items1;
}

service.getItems2=function(){
	return service.items2;
}


service.isEmpty=function(items){

	if(items.length==0)
		return true;
	else
	return false;
}


}






})();