(function(Fly) {

	Fly.Model = Backbone.Model.extend({ /* ... */ });
	Fly.Collection = Backbone.Collection.extend({ /* ... */ });
	Fly.Router = Backbone.Router.extend({ /* ... */ });

	// This will fetch the tutorial template and render it.
	Fly.Views.Home = Backbone.View.extend({
		template: "app/templates/fly/main.html",
		render: function(done) {
			var view = this;
			// Fetch the template, render it to the View element and call done.
			aerotour.fetchTemplate(this.template, function(tmpl) {
				view.el.innerHTML = tmpl();
				done(view.el);

				/**
				 * Do stuff here
				 */
				console.log("Fly");
				
			});
		}
	});

})(aerotour.module("fly"));