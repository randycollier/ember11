Ember11.ProductsEditController = Ember.ObjectController.extend({
  needs: 'products',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.products.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('products',this.get('model'));
    }
  }
});

