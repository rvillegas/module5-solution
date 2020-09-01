xdescribe("SignUpController", function () {

  beforeEach(function () {
    module(function ($provide) {


      $provide.service('UserServiceMock', function () {
        var service = this;
        service.user = {};

        service.getUser = function () {
          return {
            firstname: 'Ramiro',
            lastname: 'Villegas',
            email: 'ramirovillegasisaza@gmail.com',
            phone: '314-617-9670',
            favorite_dish: 'A2'
          };

        };

        service.setUser = function (user) {
          service.user = {
            firstname: 'Ramiro',
            lastname: 'Villegas',
            email: 'ramirovillegasisaza@gmail.com',
            phone: '314-617-9670',
            favorite_dish: 'A2'
          };;
        };
      });
    
      $provide.service('MenuServiceMock', function () {
          var service = this;
          service.user = {};
  
          service.getCategories = function () {
            return [{"id":1,"short_name":"L","name":"Lunch","special_instructions":"Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot \u0026 Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.","url":"https://rvillegas.herokuapp.com/categories/L.json"},{"id":2,"short_name":"A","name":"Soup","special_instructions":"","url":"https://rvillegas.herokuapp.com/categories/A.json"},{"id":3,"short_name":"B","name":"Appetizers","special_instructions":"","url":"https://rvillegas.herokuapp.com/categories/B.json"},{"id":4,"short_name":"SP","name":"Chef's Recommendations","special_instructions":"","url":"https://rvillegas.herokuapp.com/categories/SP.json"},{"id":5,"short_name":"C","name":"Chicken","special_instructions":"","url":"https://rvillegas.herokuapp.com/categories/C.json"},{"id":6,"short_name":"F","name":"Beef","special_instructions":"","url":"https://rvillegas.herokuapp.com/categories/F.json"},{"id":7,"short_name":"V","name":"Veal","special_instructions":"","url":"https://rvillegas.herokuapp.com/categories/V.json"},{"id":8,"short_name":"DK","name":"Duck","special_instructions":"","url":"https://rvillegas.herokuapp.com/categories/DK.json"},{"id":9,"short_name":"VG","name":"Vegetables","special_instructions":"","url":"https://rvillegas.herokuapp.com/categories/VG.json"},{"id":10,"short_name":"CU","name":"Curry","special_instructions":"","url":"https://rvillegas.herokuapp.com/categories/CU.json"},{"id":11,"short_name":"NL","name":"Noodles (Lo Mein)","special_instructions":"","url":"https://rvillegas.herokuapp.com/categories/NL.json"},{"id":12,"short_name":"NF","name":"Mei Fan (Very Fine Noodles)","special_instructions":"","url":"https://rvillegas.herokuapp.com/categories/NF.json"},{"id":13,"short_name":"PF","name":"Pan Fried Noodles","special_instructions":"","url":"https://rvillegas.herokuapp.com/categories/PF.json"},{"id":14,"short_name":"FR","name":"Fried Rice","special_instructions":"","url":"https://rvillegas.herokuapp.com/categories/FR.json"},{"id":15,"short_name":"CM","name":"Chow Mein","special_instructions":"","url":"https://rvillegas.herokuapp.com/categories/CM.json"},{"id":16,"short_name":"FY","name":"Egg Foo Young","special_instructions":"","url":"https://rvillegas.herokuapp.com/categories/FY.json"},{"id":17,"short_name":"SO","name":"Side Orders","special_instructions":"","url":"https://rvillegas.herokuapp.com/categories/SO.json"},{"id":18,"short_name":"DS","name":"Desserts","special_instructions":"","url":"https://rvillegas.herokuapp.com/categories/DS.json"},{"id":19,"short_name":"D","name":"Dinner Combo","special_instructions":"Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot \u0026 Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll.","url":"https://rvillegas.herokuapp.com/categories/D.json"},{"id":20,"short_name":"SR","name":"Sushi Menu","special_instructions":"Contains raw ingredients. Consuming raw or undercooked meat, poultry, or seafood may increase your risk of food borne illness.","url":"https://rvillegas.herokuapp.com/categories/SR.json"}];
          }  


          });

      });
    });

    module('restaurant');

  var user={
    firstname: 'Luz Maria',
    lastname: 'Posada',
    email: 'luzmariaposada@gmail.com',
    phone: '314-617-9670',
    favorite_dish: 'SP1'
  };

  var $controller;
  var SignUpController;
  var $state;

  beforeEach(inject(function (_$controller_, UserServiceMock, MenuServiceMock, $timeout, $state) {
    $controller = _$controller_;

    SignUpController =
      $controller('SignUpController',
        { UserService: UserServiceMock, MenuService: MenuServiceMock, $timeout: $timeout, $state: $state  });

  }));

  it("should change user name controller", function () {
    SignUpController.save(user);
    expect(SignUpController.user.firstname).toBe("Luz Maria");
  });

});