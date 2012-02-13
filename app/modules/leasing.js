(function(Leasing) {

	Leasing.Model = Backbone.Model.extend({ /* ... */ });
	Leasing.Collection = Backbone.Collection.extend({ /* ... */ });
	Leasing.Router = Backbone.Router.extend({ /* ... */ });

	// This will fetch the tutorial template and render it.
	Leasing.Views.Home = Backbone.View.extend({
		template: "app/templates/leasing/main.html",
		render: function(done) {
			var view = this;
			// Fetch the template, render it to the View element and call done.
			aerotour.fetchTemplate(this.template, function(tmpl) {
				view.el.innerHTML = tmpl();
				done(view.el);

				/**
				 * Do stuff here
				 */
				console.log("Leasing");
				
			});
		}
	});

})(aerotour.module("leasing"));