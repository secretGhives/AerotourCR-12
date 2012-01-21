// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/landing/main1',
  'views/home/main',
  'views/fleet/main',
  'views/administration/main',
  'views/sales/main',
  'views/leasing/main',
  'views/maintance/main'
], function($, _, Backbone, landingView, mainHomeView, fleetView, administrationView, salesView, leasingView, maintanceView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'landing': 'showLandging',
      'fly': 'showHome',
      'fleet': 'showFleet',
      'administration': 'showAdministration',
      'sales': 'showSales',
      'leasing': 'showLeasing',
      'maintance': 'showMaintance',

      // Default
      '*actions': 'defaultAction'
    },
    // Call render on the module we loaded in via the dependency array
    showHome: function(){
      // 'views/home/main'
      mainHomeView.render();
    },
    showFleet: function(){
     fleetView.render();
    },
    showAdministration: function(){
      administrationView.render();
    },
    showSales: function(){
      salesView.render();
    },
    showLeasing: function(){
      leasingView.render();
    },
    showMaintance: function(){
      maintanceView.render();
    },
    showLandging: function(){
      landginView.render();
    },

    defaultAction: function(actions){
      // We have no matching route, lets display the home page
      landingView.render();
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});