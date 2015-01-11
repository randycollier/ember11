 Ember11.PRODUCTS = [
	{products_id:'1',id:'1',name:'widgetA'},
	{products_id:'2',id:'2',name:'widgetB'},
 	
	{products_id:'3',id:'3',name:'widgetC'},
	
	{products_id:'4',id:'4',name:'widgetD'},
	
	{products_id:'5',id:'5',name:'widgetE'},
 ];


Ember11.ProductsRoute = Ember.Route.extend({
  model: function(params) {
    return Ember11.PRODUCTS;
    //return this.get('store').find('products', params.products_id);
  }
});

