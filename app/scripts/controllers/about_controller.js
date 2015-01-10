Ember11.AboutController = Ember.ObjectController.extend({
  // Implement your controller here.
  currentTime:function(){
  		return (new Date()).toDateString();
  	}.property()

});

