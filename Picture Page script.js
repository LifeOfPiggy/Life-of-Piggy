<<<<<<< HEAD
// picture page scripts
$(document).ready(function() {
	// projects container animation
	$(".pictureContainer").mouseenter(function() {
		$(this).children().css("opacity", 0.8);
		$(this).css("background-size", "350px 350px");
	});
	
	$(".pictureContainer").mouseleave(function() {
		$(this).children().css("opacity", 0);
		$(this).css("background-size", "300px 300px");
	});
=======
// picture page scripts
$(document).ready(function() {
	// projects container animation
	$(".pictureContainer").mouseenter(function() {
		$(this).children().css("opacity", 0.8);
		$(this).css("background-size", "350px 350px");
	});
	
	$(".pictureContainer").mouseleave(function() {
		$(this).children().css("opacity", 0);
		$(this).css("background-size", "300px 300px");
	});
>>>>>>> 1d5f60f67c038657ee9710a74f7cede72474f804
});