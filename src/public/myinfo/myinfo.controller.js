(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['UserService', "MenuService"];
    function MyInfoController(UserService,MenuService) {

        var MyInfoCtrl = this;

        MyInfoCtrl.user = UserService.user;

        MyInfoCtrl.validUser = function() {
            if (MyInfoCtrl.user.firstname) return true;
            return false;
        };

        MyInfoCtrl.getFavoriteDish = function(shortName) {

            return MenuService.dishes[shortName];

        };




    };
    
    })();
    