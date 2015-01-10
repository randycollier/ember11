 Ember11.PRODUCTS = [
	{products_id:'1',id:'1',name:'widgetA'},
	{products_id:'2',id:'2',name:'widgetB'}
 ];


Ember11.ProductsRoute = Ember.Route.extend({
  model: function(params) {
    return Ember11.PRODUCTS;
    //return this.get('store').find('products', params.products_id);
  }
});

