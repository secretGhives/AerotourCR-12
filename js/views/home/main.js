// Filename: views/home/main
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/home/main.html',
	'bootstrap',
	'lightbox'
], function($, _, Backbone, mainHomeTemplate){

	var mainHomeView = Backbone.View.extend({
		el: $("#page"),
		render: function(){

			//render template
			this.el.html(mainHomeTemplate);

			$('#flyCarousel').carousel();
			$('.lightbox').lightbox();

		}
	});
	return new mainHomeView;
});