import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function() {
    this.transitionTo('slide', 1);
  }
});
