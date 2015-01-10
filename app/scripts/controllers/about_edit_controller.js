Ember11.AboutEditController = Ember.ObjectController.extend({
  needs: 'about',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.about.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('about',this.get('model'));
    }
  }
});

