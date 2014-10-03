import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(markdown) {
  var rendered = marked(markdown);
  return new Ember.Handlebars.SafeString(rendered);
});