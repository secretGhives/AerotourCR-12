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

			myAppName.console.log('views/administration/main.js says Hi');

			// Render template
			this.el.html( compiledTemplate );

			$("[rel=pop]").popover( {offset: 10} ).click(function(e) { e.preventDefault() });
			$("[rel=tip]").twipsy({live: true});
			if ($("[rel=roundabout]").length > 0){
				$("[rel=roundabout]").roundabout();
			};
	
		}
	});
	return new administrationView;
});