// Filename: views/administration/main
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/administration/main.html'
], function($, _, Backbone, administrationTemplate){
	var administrationView = Backbone.View.extend({
		el: $("#page"),
		initialize: function(){
		},
		render: function(){
			var data = {};
			var compiledTemplate = _.template( administrationTemplate, data );

			// Render template
			this.el.html( compiledTemplate );

			$('#adminCarousel').carousel();
	
		}
	});
	return new administrationView;
});