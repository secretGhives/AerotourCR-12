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

	if ($("[rel=pop]").length > 0){
		$("[rel=pop]").popover( {offset: 10} ).click(function(e) { e.preventDefault() });
	}
	if ($("[rel=roundabout]").length > 0){
		$("[rel=roundabout]").roundabout();
	}
		
	if ($("[rel=tip]").length > 0){
		$("[rel=tip]").twipsy({live: true});
	}

	if ($("table#sortTableExample").length > 0){
		$("table#sortTableExample").tablesorter({ sortList: [[1,0]] });
	}
	
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
	$this.addClass('active').find('p').fadeIn();
}

// $(document).keydown(function (e) {
// 	var keyCode = e.keyCode || e.which,
// 			arrow = {left: 37, up: 38, right: 39, down: 40 };

// 	switch (keyCode) {
// 		case arrow.left:
// 			console.log('left!');
// 		break;
// 		case arrow.up:
// 			console.log('up!');
// 		break;
// 		case arrow.right:
// 			console.log('right!');
// 		break;
// 		case arrow.down:
// 			console.log('down!');
// 		break;
// 	}
// });