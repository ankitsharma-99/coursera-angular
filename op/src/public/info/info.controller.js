(function () {
    "use strict";

    angular.module('public')
        .controller('InfoController', InfoController);

    InfoController.$inject = ['SignUpService','ApiPath'];
    function InfoController(SignUpService,ApiPath) {
        var $ctrl = this; 	  
        $ctrl.basePath = ApiPath;
        $ctrl.user = SignUpService.user; 
        $ctrl.hasSignUp =  SignUpService.hasSignUp;
  
    };


})();