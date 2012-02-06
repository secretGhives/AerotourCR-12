(function(Fly) {

	Fly.Model = Backbone.Model.extend({ /* ... */ });
	Fly.Collection = Backbone.Collection.extend({ /* ... */ });
	//Fly.Router = Backbone.Router.extend({ /* ... */ });

	var Helper = aerotour.module("helper");

	Fly.Router = Helper.SubRoute.extend({
		routes: {
			"": "view"
		},
		view: function(hash) {
			var route = this;
			var fly = new Fly.Views.Home();

			// Attach the runway to the DOM
			fly.render(function(el) {
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
	Fly.Views.Home = Backbone.View.extend({
		template: "app/templates/fly/main.html",

		render: function(done) {
			var view = this;

			// Fetch the template, render it to the View element and call done.
			aerotour.fetchTemplate(this.template, function(tmpl) {
				view.el.innerHTML = tmpl();

				done(view.el);
			});
		}
	});

})(aerotour.module("fly"));