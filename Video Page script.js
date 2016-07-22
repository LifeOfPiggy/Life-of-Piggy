// video page scripts
$(document).ready(function() {
	// cycling through video containers
	$(".videoContainer").hide();
	var videos = $(".videoContainer").hide().toArray();
	$(videos[0]).show();
	
	var i = 0;
	$("aside .ghostButton").click(function() {
		$(videos[i]).fadeOut(500);
		i += parseInt($(this).attr("id"));
		if (i < 0) {
			i = videos.length - 1;
		} else if (i >= videos.length) {
			i = 0;
		}

		if (i > -1 && i < videos.length) {
			setTimeout(function() {
				$(videos[i]).fadeIn(500);
			}, 500);
		}
	});
});