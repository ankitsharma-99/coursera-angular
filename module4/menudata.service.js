(function(){

'use strict';

angular.module('data')
.service('MenuDataService',MenuDataService);

MenuDataService.$inject=['$http'];

function MenuDataService($http){





var service=this;
service.getAllCategories=function(){


//console.log('In getAllCategories');
var response=$http({
		method:"GET",
		url:"https://davids-restaurant.herokuapp.com/categories.json"
});

return response;

}  

service.getItemsForCategory=function(categoryShortName){

//console.log('In getItemsForCategory:',categoryShortName);
	var response=$http({
		method:"GET",
		url:("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName)
});

/*var res1=response;
res1.then(function(res){
console.log("Resolving:",res);
})*/


return response;

}


}

})();