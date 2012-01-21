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

			$("[rel=pop]").popover( {offset: 10} ).click(function(e) { e.preventDefault() });
			$("[rel=tip]").twipsy({live: true});
			if ($("[rel=roundabout]").length > 0){
				$("[rel=roundabout]").roundabout();
			};
			
		}
	});
	return new salesView;
});