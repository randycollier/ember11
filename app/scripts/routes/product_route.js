Ember11.ProductRoute = Ember.Route.extend({
  model: function(params) {
    console.log(params.id);
    console.log(Ember11.PRODUCTS);
    console.log(Ember11.PRODUCTS.findBy('id','1'));
    return Ember11.PRODUCTS.findBy('id',params.id);
    
    //return this.get('store').find('product', params.product_id);
  }
});

