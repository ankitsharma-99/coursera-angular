(function(){

'use strict';
angular.module('MenuApp')
.controller('itemsController',itemsController);

itemsController.$inject=['catitems'];
function itemsController(catitems){
var itctrl=this;
itctrl.catitems=catitems.data.menu_items;
//console.log('Hey____:',itctrl.catitems);
}

})();