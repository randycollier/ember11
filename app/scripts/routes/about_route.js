Ember11.ABOUT = 
	{
		firstName:'Randy',
		lastName:'Collier',
		appName:'Ember11',
		children:[{name:'james'},{name:'michael'}]
		
	}
;

Ember11.AboutRoute = Ember.Route.extend({
  model: function(params) {
  	return Ember11.ABOUT;
    //return this.get('store').find('about', params.about_id);
  }
});

