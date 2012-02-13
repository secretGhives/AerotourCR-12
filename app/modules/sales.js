(function(Sales) {

	Sales.Model = Backbone.Model.extend({ /* ... */ });
	Sales.Collection = Backbone.Collection.extend({ /* ... */ });
	Sales.Router = Backbone.Router.extend({ /* ... */ });

	// This will fetch the tutorial template and render it.
	Sales.Views.Home = Backbone.View.extend({
		template: "app/templates/sales/main.html",
		render: function(done) {
			var view = this;
			// Fetch the template, render it to the View element and call done.
			aerotour.fetchTemplate(this.template, function(tmpl) {
				view.el.innerHTML = tmpl();
				done(view.el);

				/**
				 * Do stuff here
				 */
				console.log("Sales");
				
			});
		}
	});

})(aerotour.module("sales"));