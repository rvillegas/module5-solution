(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['UserService', 'MenuService', '$timeout','$state'];
    function SignUpController(UserService, MenuService, $timeout, $state) {

        var SignUpCtrl = this;
        // console.log('MenuService.dishes');       
        // console.log(MenuService.dishes);
        SignUpCtrl.savedText=''
        SignUpCtrl.user = UserService.user;
        SignUpCtrl.save = function (user) {
            SignUpCtrl.savedText='Your information has been saved'
            UserService.setUser(user);
            $timeout(function () {
                SignUpCtrl.savedText='';
                $state.go('public.home');
            },2000);
            
        }

        SignUpCtrl.get = function () {
            return UserService.getUser();
        }
        SignUpCtrl.dishIsValid = function(shortName) {

            return MenuService.ItemIsValid(shortName);
        }

        SignUpCtrl.getDishName = function(shortName) {

            if (MenuService.dishes[shortName]) {
            return MenuService.dishes[shortName].name;
            }
            else return '';
        }
        SignUpCtrl.getFavoriteDish =function(shortName) {

            return MenuService.dishes[shortName]
        }



    };
    
    })();
    