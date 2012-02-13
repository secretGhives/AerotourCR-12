(function(Fleet) {

	Fleet.Model = Backbone.Model.extend({ /* ... */ });
	Fleet.Collection = Backbone.Collection.extend({ /* ... */ });
	Fleet.Router = Backbone.Router.extend({ /* ... */ });

	// This will fetch the tutorial template and render it.
	Fleet.Views.Home = Backbone.View.extend({
		template: "app/templates/fleet/main.html",
		render: function(done) {
			var view = this;
			// Fetch the template, render it to the View element and call done.
			aerotour.fetchTemplate(this.template, function(tmpl) {
				view.el.innerHTML = tmpl();
				done(view.el);

				/**
				 * Do stuff here
				 */
				console.log("Fleet");
				
			});
		}
	});

})(aerotour.module("fleet"));