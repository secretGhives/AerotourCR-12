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

			myAppName.console.log('views/fleet/main.js says Hi');

			// Render template
			this.el.html( compiledTemplate );


			$("[rel=pop]").popover( {offset: 10} ).click(function(e) { e.preventDefault() });
			$("[rel=tip]").twipsy({live: true});
			if ($("[rel=roundabout]").length > 0){
				$("[rel=roundabout]").roundabout();
			};

		}
	});
	return new fleetView;
});