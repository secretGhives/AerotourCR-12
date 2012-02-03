// Filename: views/fleet/main
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/fleet/main.html'
], function($, _, Backbone, fleetTemplate){
	var fleetView = Backbone.View.extend({
		el: $("#page"),
		initialize: function(){
		},
		render: function(){
			var data = {};
			var compiledTemplate = _.template( fleetTemplate, data );

			// Render template
			this.el.html( compiledTemplate );

			$('#fleetCarousel').carousel();

		}
	});
	return new fleetView;
});