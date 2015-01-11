Ember11.Router.map(function () {
  this.resource('about',{path:'/about'});

  this.resource('products',  function(){
  	this.resource('product',{path:'/:id'})
  });

// this.resource('products', function() {
//     this.route('product', { path:'/product/:id'})
// });
});
