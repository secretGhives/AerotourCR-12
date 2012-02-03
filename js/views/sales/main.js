// Filename: views/sales/main
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/sales/main.html'
], function($, _, Backbone, salesTemplate){

	var salesView = Backbone.View.extend({
		el: $("#page"),
		render: function(){

			//render template
			this.el.html(salesTemplate);

			$('#salesCarousel').carousel();
			
		}
	});
	return new salesView;
});