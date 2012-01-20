// Filename: views/landing/main
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/landing/main.html'
], function($, _, Backbone, landingTemplate){
	var landingView = Backbone.View.extend({
		el: $("body"),
		initialize: function(){
		},
		render: function(){
			var data = {};
			var compiledTemplate = _.template( landingTemplate, data );

			// Render template
			this.el.html( compiledTemplate );

			myAppName.console.log('views/landing/main.js says Hi');
	

			if ($("[rel=pop]").length > 0){
				$("[rel=pop]").popover( {offset: 10} ).click(function(e) { e.preventDefault() });
			}

			if ($("[rel=roundabout]").length > 0){
				$("[rel=roundabout]").roundabout();
			}
						
			if ($("[rel=tip]").length > 0){
				$("[rel=tip]").twipsy({live: true});
			}

			var pages = ['home', 'home1', 'home2', 'home3'];
			$("body").addClass(pages[Math.floor(Math.random() * pages.length)]);

			$("#toggleSitemap").toggle(
				function () {
					$("#sitemap").slideDown("fast");
				},
				function () {
					$("#sitemap").slideUp("fast");
				}
			);

			$(".sec-nav a").click(selectNav);

			function  selectNav(e) {
			  e.preventDefault();
			  $("p.info").hide();
			  $("nav.active").removeClass("active");

			  $this = $(this).parent();
			  $this.addClass('active').find('p').fadeIn();
			};

		}
	});
	return new landingView;
});