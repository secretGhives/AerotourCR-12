(function(Administration) {

	Administration.Model = Backbone.Model.extend({ /* ... */ });
	Administration.Collection = Backbone.Collection.extend({ /* ... */ });
	Administration.Router = Backbone.Router.extend({ /* ... */ });

	// This will fetch the tutorial template and render it.
	Administration.Views.Home = Backbone.View.extend({
		template: "app/templates/administration/main.html",
		render: function(done) {
			var view = this;
			// Fetch the template, render it to the View element and call done.
			aerotour.fetchTemplate(this.template, function(tmpl) {
				view.el.innerHTML = tmpl();
				done(view.el);

				/**
				 * Do stuff here
				 */
				console.log("Administration");
				
			});
		}
	});

})(aerotour.module("administration"));