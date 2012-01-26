// Filename: views/sales/main
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/sales/main.html'
], function($, _, Backbone, salesTemplate){

	var salesView = Backbone.View.extend({
		el: $("#page"),
		render: function(){

			//render template
			this.el.html(salesTemplate);

			$("[rel=pop]").popover( {offset: 10} ).click(function(e) { e.preventDefault() });
			$("[rel=tip]").twipsy({live: true});
			if ($("[rel=roundabout]").length > 0){
				$("[rel=roundabout]").roundabout();
			};




			var photos = [ {
					"image" : "sales/sales.jpg",
					"firstline" : "Going on",
					"secondline" : "vacation?"
				}, {
					"image" : "admin/admin1.jpg",
					"firstline" : "Or still busy at",
					"secondline" : "work?"
				}, {
					"image" : "admin/admin2.jpg",
					"firstline" : "Get out and be",
					"secondline" : "active"
				}, {
					"image" : "admin/admin3.jpg",
					"firstline" : "Take a fresh breath of",
					"secondline" : "nature"
				}
			];




				// Speed of the automatic slideshow
				var slideshowSpeed = 6000;

				// Backwards navigation
				$("#back").click(function() {
					stopAnimation();
					navigate("back");
				});
				
				// Forward navigation
				$("#next").click(function() {
					stopAnimation();
					navigate("next");
				});
				
				var interval;
				$("#control").toggle(function(){
					stopAnimation();
				}, function() {
					// Change the background image to "pause"
					//$(this).css({ "background-image" : "url(img/btn_pause.png)" });
					
					// Show the next image
					navigate("next");
					
					// Start playing the animation
					interval = setInterval(function() {
						navigate("next");
					}, slideshowSpeed);
				});
				
				
				var activeContainer = 1;  
				var currentImg = 0;
				var animating = false;
				var navigate = function(direction) {
					// Check if no animation is running. If it is, prevent the action
					if(animating) {
						return;
					}
					
					// Check which current image we need to show
					if(direction == "next") {
						currentImg++;
						if(currentImg == photos.length + 1) {
							currentImg = 1;
						}
					} else {
						currentImg--;
						if(currentImg == 0) {
							currentImg = photos.length;
						}
					}
					
					// Check which container we need to use
					var currentContainer = activeContainer;
					if(activeContainer == 1) {
						activeContainer = 2;
					} else {
						activeContainer = 1;
					}
					
					showImage(photos[currentImg - 1], currentContainer, activeContainer);
					
				};
				
				var currentZindex = -1;
				var showImage = function(photoObject, currentContainer, activeContainer) {
					animating = true;
					
					// Make sure the new container is always on the background
					currentZindex--;
					
					// Set the background image of the new active container
					$("#headerimg" + activeContainer).css({
						"background-image" : "url(img/" + photoObject.image + ")",
						"display" : "block",
						"z-index" : currentZindex
					});
					
					// Hide the header text
					$("#headertxt").css({"display" : "none"});
					
					// Set the new header text
					$("#firstline").html(photoObject.firstline);
					$("#secondline").html(photoObject.secondline);					
					
					// Fade out the current container
					// and display the header text when animation is complete
					$("#headerimg" + currentContainer).fadeOut(function() {
						setTimeout(function() {
							$("#headertxt").css({"display" : "block"});
							animating = false;
						}, 500);
					});
				};
				
				var stopAnimation = function() {
					// Change the background image to "play"
					//$("#control").css({ "background-image" : "url(img/btn_play.png)" });
					
					// Clear the interval
					clearInterval(interval);
				};
				
				// We should statically set the first image
				navigate("next");
				
				// Start playing the animation
				// interval = setInterval(function() {
				// 	navigate("next");
				// }, slideshowSpeed);

			
		}
	});
	return new salesView;
});