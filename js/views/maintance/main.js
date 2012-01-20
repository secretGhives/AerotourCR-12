// Filename: views/maintance/main
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/maintance/main.html'
], function($, _, Backbone, maintanceTemplate){

  var maintanceView = Backbone.View.extend({
    el: $("#page"),
    render: function(){

      //render template
      this.el.html(maintanceTemplate);

      myAppName.console.log('views/maintance/main.js says Hi');
      //myAppName.console.log(myAppName.settings.isOnline);

      $("[rel=pop]").popover( {offset: 10} ).click(function(e) { e.preventDefault() });
      $("[rel=tip]").twipsy({live: true});
      if ($("[rel=roundabout]").length > 0){
        $("[rel=roundabout]").roundabout();
      };
      
    }
  });
  return new maintanceView;
});