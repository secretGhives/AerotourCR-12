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
	$("a[rel=pop]").popover( {offset: 10} ).click(function(e) { e.preventDefault() });
	$("a[rel=tip]").twipsy({live: true});

	$(".sec-nav a").click(function(e) {
		e.preventDefault();
		$("li.active").removeClass("active");

		$this = $(this);
		$this.parent().toggleClass("active");
	});

});