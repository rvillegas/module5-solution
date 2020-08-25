(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  



  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }
    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });

  };

  service.getDishes = function() {
    var sn={};

      var promesa = $http.get(ApiPath + '/menu_items.json').then(function (response) {
      var db=response.data.menu_items;
      db.forEach(val=> sn[val.short_name]=val);
    });

    return sn
 };

  service.dishes=service.getDishes();

  //console.log('dishes'+service.dishes);

  service.ItemIsValid = function(shortName)
  {
    //console.log('service.dishes' + Object.keys(service.dishes));
    if (service.dishes[shortName]) return true;
    return false;
  };



};



})();
