import Ember from 'ember';

var Router = Ember.Router.extend({
  location: PresentationENV.locationType
});

Router.map(function() {
	this.route('slides');

	this.resource('slides', function(){
		this.resource('slide', { path: '/:slide_id' });
	});
});

export default Router;
