(function(){

'use strict';
angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'home.template.html'
  })

  // categories
  .state('categories', {
    url: '/categories',
	templateUrl: 'main-categories.template.html',
    controller: 'CategoriesController as catctrl',
    resolve: {
      allcat: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  //specific category
  .state('items',{
  	url:'/items/{catId}',
  	templateUrl: 'main-items.template.html',
    controller: 'itemsController as itctrl',
    resolve: {
      catitems: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.catId);
      }]
    }

  })
  ;
}


})();