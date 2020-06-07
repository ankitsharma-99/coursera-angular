(function(){

'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',foundItemsDirective);

function foundItemsDirective(){
	var ddo = {
    templateUrl: "foundList.html",

    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: foundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
 
  };

  return ddo;
}

function foundItemsDirectiveController()
{
	var list=this;
	list.isEmpty=function(){
		if(list.found==undefined)
			return true;
		else if(list.found.length==0)
		return true;
		else
		return false; 
	}

}





NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService){

var list=this;
list.errmsg=false;
//list.found=[];
list.searchTerm="";

list.getMatchedMenuItems=function(searchTerm){

if(searchTerm=="")
{

list.errmsg=true;
}
else
{
	var promise=MenuSearchService.getMatchedMenuItems(searchTerm);
	promise.then(function(response){

		//console.log("fetched:",response.data);
			var arr=response.data.menu_items;
//console.log("arr.length:",arr.length);

			var foundItems=[];
			for(var i=0;i<arr.length;i++)
			{
				var it=arr[i].description;
				
				if(it.indexOf(searchTerm)!==-1)
					foundItems.push(arr[i]);
			}
			//console.log(foundItems);
			list.found=foundItems;
				if(list.found.length===0)
				list.errmsg=true;
			//console.log("list.found:",list.found);

	})
	  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });
}  

}

list.removeItem = function (itemIndex){
	list.found.splice(itemIndex,1);
}
list.isEmpty=function(){

	if(list.errmsg==true)
		return true;
	else
		return false;
}


}


MenuSearchService.$inject=['$http'];
function MenuSearchService($http){

	var service=this;
	service.getMatchedMenuItems=function(searchTerm){

		var response=$http({
			method:"GET",
			url:"https://davids-restaurant.herokuapp.com/menu_items.json"
		});


		return response;

		/*return response.then(function(result){

			console.log("fetched:",result.data);
			var arr=result.data.menu_items;
//console.log("arr.length:",arr.length);

			var foundItems=[];
			for(var i=0;i<arr.length;i++)
			{
				var it=arr[i].name;
				
				if(it.indexOf(searchTerm)!==-1)
					foundItems.push(arr[i]);
			}
			console.log(foundItems);
			return foundItems;

		});*/

	}

}




})();