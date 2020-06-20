(function () {
"use strict";

  angular.module('common')
  .service('SignUpService', SignUpService);


  SignUpService.$inject = ['$http', 'ApiPath'];
  function SignUpService($http, ApiPath) {
    var service = this;

    service.user = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        favouriteDish: ''
    };
    service.hasSignUp = false;
    service.signUpWithUserInfo = function (user) {
      return $http.get(ApiPath + '/menu_items.json')
          .then(function (response) {
              if(response.data && response.data.menu_items && Array.isArray(response.data.menu_items)){
                var len = response.data.menu_items.length;
                for (var i = 0; i < len; i++){
                  var item =  response.data.menu_items[i];
                  if (user.favouriteDish === item.short_name) {

                    service.user = user;
                    service.user.dishName = item.name; //a more readable name
                    service.user.description = item.description;
                    service.user.shortName=item.short_name;

                    service.hasSignUp = true;
                    break;
                  }
                }
              }
              if (service.hasSignUp) {
                  response.message = "Your information has been saved";                
              }
              else{
                  response.message = "No such menu number exists";
              }
              return response;
      });
    };
  }
})();