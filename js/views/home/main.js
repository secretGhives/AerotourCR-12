// Filename: views/home/main
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/home/main.html',
	//libs
	'libs/jquery/easing',
	// 'libs/jquery/mousewheel',
	//autostart
	'bootstrap/bootstrap-tabs',
	'bootstrap/bootstrap-alerts',
	'bootstrap/bootstrap-modal',
	'bootstrap/bootstrap-buttons',
	'bootstrap/bootstrap-dropdown',
	//requires init
	'order!bootstrap/bootstrap-twipsy',
	'order!bootstrap/bootstrap-popover',
	'classes/roundabout'
], function($, _, Backbone, mainHomeTemplate){

	var mainHomeView = Backbone.View.extend({
		el: $("#page"),
		render: function(){

			//render template
			this.el.html(mainHomeTemplate);

			$("[rel=pop]").popover( {offset: 10} ).click(function(e) { e.preventDefault() });
			$("[rel=tip]").twipsy({live: true});
			if ($("[rel=roundabout]").length > 0){
				$("[rel=roundabout]").roundabout();
			};
			
		}
	});
	return new mainHomeView;
});