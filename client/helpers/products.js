Template.products.helpers({
    productos: function() {
      return Products.find();
    },
    token: function() {
      var dd
      var jwt = require('jsonwebtoken');
      var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
      return token;
    }
    
  });
 

 
 