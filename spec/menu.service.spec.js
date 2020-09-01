describe('menu', function () {

    var menuservice;
    var $httpBackend;
    var ApiPath;
  
    beforeEach(function () {
      module('common');
  
      inject(function ($injector) {
        menuservice = $injector.get('MenuService');
        $httpBackend = $injector.get('$httpBackend');
        ApiPath = $injector.get('ApiPath');
      });
    });
  
    it('should return categories list', function() {
        var resp= [{"id":1,"short_name":"L","name":"Lunch","special_instructions":"Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot \u0026 Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.","url":"https://rvillegas.herokuapp.com/categories/L.json"},
        {"id":2,"short_name":"A","name":"Soup","special_instructions":"","url":"https://rvillegas.herokuapp.com/categories/A.json"},
        {"id":3,"short_name":"B","name":"Appetizers","special_instructions":"","url":"https://rvillegas.herokuapp.com/categories/B.json"}]

        // var category='A'; 
        // var config = {};
        // if (category) {
        //   config.params = {'category': category};
        // }  
      //$httpBackend.whenGET(ApiPath +  '/menu_items.json', config).respond(['A1', 'A2']);  
      $httpBackend.whenGET(ApiPath + '/categories.json').respond(resp);
      
      a=menuservice.getCategories().then(function(response) {
        expect(response.data).toEqual(resp);
      });
      console.log(a);
      $httpBackend.flush();
    });
  
  });
  