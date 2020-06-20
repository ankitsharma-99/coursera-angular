(function () {
    'use strict';

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['SignUpService'];
    function SignUpController (SignUpService) {
        var $ctrl = this;

       // $ctrl.nameMinLength = 4;

        // $ctrl.user = {
        //     firstName: signUpForm.firstName,
        //     lastName: signUpForm.lastName,
        //     email: signUpForm.email,
        //     phone: signUpForm.phone,
        //     favouriteDish: signUpForm.favouriteDish
        // };

        $ctrl.submit = function () {
        	
            SignUpService.signUpWithUserInfo($ctrl.user).then(function (response) {
                $ctrl.message = response.message;
                $ctrl.completed=true;
            });
        }


    }
})();