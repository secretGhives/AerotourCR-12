(function(Fleet) {

	Fleet.Model = Backbone.Model.extend({ /* ... */ });
	Fleet.Collection = Backbone.Collection.extend({ /* ... */ });
	//Fleet.Router = Backbone.Router.extend({ /* ... */ });

	var Helper = aerotour.module("helper");

	Fleet.Router = Helper.SubRoute.extend({
		routes: {
			"": "view"
		},
		view: function(hash) {
			var route = this;
			var fleet = new Fleet.Views.Home();

			// Attach the runway to the DOM
			fleet.render(function(el) {
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
	Fleet.Views.Home = Backbone.View.extend({
		template: "app/templates/fleet/main.html",

		render: function(done) {
			var view = this;

			// Fetch the template, render it to the View element and call done.
			aerotour.fetchTemplate(this.template, function(tmpl) {
				view.el.innerHTML = tmpl();

				done(view.el);
			});
		}
	});

})(aerotour.module("fleet"));