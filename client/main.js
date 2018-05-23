import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'; 

import './templates/layout.html';

Template.products.helpers({
  productos: function() {
    return Products.find();
  }
})