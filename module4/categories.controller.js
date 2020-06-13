(function(){

'use strict';
angular.module('MenuApp')
.controller('CategoriesController',CategoriesController);

CategoriesController.$inject=['allcat'];
function CategoriesController(allcat){
var catctrl=this;
catctrl.allcat=allcat.data;
//console.log(catctrl.allcat);
}

})();