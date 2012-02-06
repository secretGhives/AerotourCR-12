// Filename: views/leasing/main
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/leasing/main.html'
], function($, _, Backbone, leasingTemplate){

	var leasingView = Backbone.View.extend({
		el: $("#page"),
		render: function(){

			//render template
			this.el.html(leasingTemplate);

			$("[rel=pop]").popover( {offset: 10} ).click(function(e) { e.preventDefault() });
			$("[rel=tip]").twipsy({live: true});
			if ($("[rel=roundabout]").length > 0){
				$("[rel=roundabout]").roundabout();
			};
			
		}
	});
	return new leasingView;
});