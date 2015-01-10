Ember11.Router.map(function () {
  this.resource('about',{path:'/about'});
  this.resource('products');
  this.resource('product', { path:'/product/:id'});

// this.resource('products', function() {
//     this.route('product', { path:'/product/:id'})
// });
});
