(function(Administration) {

	Administration.Model = Backbone.Model.extend({ /* ... */ });
	Administration.Collection = Backbone.Collection.extend({ /* ... */ });
	//Administration.Router = Backbone.Router.extend({ /* ... */ });

	var Helper = aerotour.module("helper");

	Administration.Router = Helper.SubRoute.extend({
		routes: {
			"": "view"
		},
		view: function(hash) {
			var route = this;
			var administration = new Administration.Views.Home();

			// Attach the runway to the DOM
			administration.render(function(el) {
				$("#page").html(el);

				// Fix for hashes in pushState and hash fragment
				if (hash && !route._alreadyTriggered) {
					// Reset to home, pushState support automatically converts hashes
					Backbone.history.navigate("", false);

					// Trigger the default browser behavior
					location.hash = hash;

					// Set an internal flag to stop recursive looping
					route._alreadyTriggered = true;
				}
			});
		}
	});

	// This will fetch the tutorial template and render it.
	Administration.Views.Home = Backbone.View.extend({
		template: "app/templates/administration/main.html",

		render: function(done) {
			var view = this;

			// Fetch the template, render it to the View element and call done.
			aerotour.fetchTemplate(this.template, function(tmpl) {
				view.el.innerHTML = tmpl();

				done(view.el);
			});
		}
	});

})(aerotour.module("administration"));