import DS from 'ember-data';

var Slide = DS.Model.extend({
	title: DS.attr( 'string' ),
	copy: DS.attr( 'string' ),
	image: DS.attr( 'string' ),
  markdown: DS.attr('string'),
	bgImage: DS.attr( 'string' ),
	bullets: DS.attr( 'array' ),
	subcopy: DS.attr( 'string' ),
	isWhite: DS.attr( 'boolean', {defaultValue: false} ),
  html: function() {
    var markdown = this.get('markdown');
  }.property('markdown')
});

Slide.reopenClass({
	FIXTURES: PresentationENV.SLIDES
});

export default Slide;
