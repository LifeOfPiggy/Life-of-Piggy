// home page scripts
$(document).ready(function() {
	// background animation
	setTimeout(function() {
		$("#homeSky").css("opacity", "1");
		$("#homeSun").css("top", "50px");
		$("#homeSun").css("left", "25vw");
		setTimeout(function() {
			$("#homeContentWrapper article .heading").css("opacity", "1");
			$("#homeContentWrapper article .ghostButton").css("opacity", "1");
			$("#homeContentWrapper article .ghostButton").css("visibility", "visible");
		}, 5000);
	}, 1000);
});