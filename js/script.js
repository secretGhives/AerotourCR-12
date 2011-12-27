// Aerotour class
var aerotour = (function () {
	'use strict'
	// Cue music, begin la magic...


})();


$(function() {

	// IE CHECK
	if ($.browser.msie){
		alert("FUCK YOU!");
	}else{
		// Cool stuff bro
	}

	//load bootstrap stuff
	// $("a[rel=pop]").popover( {offset: 10} ).click(function(e) { e.preventDefault() });
	// $("a[rel=tip]").twipsy({live: true});

	$("#toggleSitemap").toggle(
	  function () {
	    $("#sitemap").slideDown("fast");
	  },
	  function () {
	    $("#sitemap").slideUp("fast");
	  }
	);

	$(".sec-nav a").click(selectNav);

});

function	selectNav(e) {
		e.preventDefault();
		$("p.info").hide();
		$("nav.active").removeClass("active");

		$this = $(this).parent();
		$this.addClass('active').find('p').fadeIn("slow");
}

$(document).keydown(function (e) {
	var keyCode = e.keyCode || e.which,
			arrow = {left: 37, up: 38, right: 39, down: 40 };

	switch (keyCode) {
		case arrow.left:
			console.log('left!');
		break;
		case arrow.up:
			console.log('up!');
		break;
		case arrow.right:
			console.log('right!');
		break;
		case arrow.down:
			console.log('down!');
		break;
	}
});