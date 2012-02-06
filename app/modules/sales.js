(function(Sales) {

	Sales.Model = Backbone.Model.extend({ /* ... */ });
	Sales.Collection = Backbone.Collection.extend({ /* ... */ });
	//Sales.Router = Backbone.Router.extend({ /* ... */ });

	var Helper = aerotour.module("helper");

	Sales.Router = Helper.SubRoute.extend({
		routes: {
			"": "view"
		},
		view: function(hash) {
			var route = this;
			var sales = new Sales.Views.Home();

			// Attach the runway to the DOM
			sales.render(function(el) {
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
	Sales.Views.Home = Backbone.View.extend({
		template: "app/templates/sales/main.html",

		render: function(done) {
			var view = this;

			// Fetch the template, render it to the View element and call done.
			aerotour.fetchTemplate(this.template, function(tmpl) {
				view.el.innerHTML = tmpl();

				done(view.el);
			});
		}
	});

})(aerotour.module("sales"));