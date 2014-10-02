import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		goto: function(dir){
			// console.log('GOTO', dir, this.controllerFor('application').get('currentID'));
			var nextSlide = parseInt(this.controllerFor('application').get('currentID')) + dir;
      var max = PresentationENV.SLIDES.length;
			if (nextSlide < 1) { nextSlide = 1; }
			if (nextSlide > max) { nextSlide = max; }
			this.transitionTo('slide', nextSlide);
		}
	}
});
