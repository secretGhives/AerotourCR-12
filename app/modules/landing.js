(function(Landing) {

  Landing.Model = Backbone.Model.extend({ /* ... */ });
  Landing.Collection = Backbone.Collection.extend({ /* ... */ });
  Landing.Router = Backbone.Router.extend({ /* ... */ });

  // This will fetch the tutorial template and render it.
  Landing.Views.Home = Backbone.View.extend({
    template: "app/templates/landing/main1.html",
    render: function(done) {
      var view = this;
      // Fetch the template, render it to the View element and call done.
      aerotour.fetchTemplate(this.template, function(tmpl) {
        view.el.innerHTML = tmpl();
        done(view.el);

        /**
         * Do stuff here
         */
        console.log("Landing");
        
      });
    }
  });

})(aerotour.module("landing"));