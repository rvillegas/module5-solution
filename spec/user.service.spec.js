xdescribe('user', function () {

    var userservice;
    var user={
        firstname: 'Luz Maria',
        lastname: 'Posada',
        email: 'luzmariaposada@gmail.com',
        phone: '314-617-9670',
        favorite_dish: 'SP1'
      };

    // var $httpBackend;
    // var ApiBasePath;
  
    beforeEach(function () {
        module('restaurant');
     user={
            firstname: 'Luz Maria',
            lastname: 'Posada',
            email: 'luzmariaposada@gmail.com',
            phone: '314-617-9670',
            favorite_dish: 'SP1'
          };

      
      inject(function ($injector) {
        userservice = $injector.get('UserService');
        // $httpBackend = $injector.get('$httpBackend');
        // ApiBasePath = $injector.get('ApiBasePath');
      });
    });
  
    it('should return firstname', function() {
      userservice.setUser(user);
      userservice.getUser().firstname.toEqual('Luz Maria')
    //   $httpBackend.whenGET(ApiBasePath + '/categories.json').respond(['Lunch', 'Dessert']);
    //   menucategories.getMenuCategories().then(function(response) {
    //     expect(response.data).toEqual(['Lunch', 'Dessert']);
    //   });
    //   $httpBackend.flush();
    });
  
  });