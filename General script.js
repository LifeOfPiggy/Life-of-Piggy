<<<<<<< HEAD
// general webpage scripts
$(document).ready(function() {
	// initial page animation
	if (!$("#homeContentWrapper").length) {
		$("#wrapper").hide();
		$("body").prepend("<div id = 'loadingIconContainer' style = 'text-align: center; margin-top: 30vh;'><img id = 'loadingIcon' style = 'width: 200px' src = 'https://s31.postimg.org/s4qpz8nbf/Piggy_s_Head_Icon.png'/><br><div id = 'loadingBar' style = 'background-color: #FFFFFF; border-left: 1px solid #F50057; border-radius: 10px; width: 150px; height: 5px; margin: auto;'></div></div>");
		$("#loadingIcon, #loadingBar").hide();
		$("#loadingIcon, #loadingBar").fadeIn(1000);
		setTimeout(function() {
			$("#loadingBar").animate({borderWidth: "150px"}, 1500);
			setTimeout(function() {
				$("#loadingIconContainer").fadeOut(1000);
				$("#wrapper").delay(1000).fadeIn(1000);
			}, 1700);
		}, 1000);
	}
    
    // header navbar animation
    var animating = false;
    
    // open and close functions
    function closeHeaderNavbar() {
        animating = true;
        // close menu
        $("#navigationButtons").css("left", "-500px");
        // animating menu icon
        $(".menuIconDiv:nth-child(1)").css("-webkit-transform", "rotate(45deg)");
        $(".menuIconDiv:nth-child(1)").css("-ms-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(1)").css("-moz-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(1)").css("-o-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(1)").css("transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(3)").css("-webkit-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(3)").css("-ms-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(3)").css("-moz-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(3)").css("-o-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(3)").css("transform", "rotate(0deg)");
        setTimeout(function() {
            $(".menuIconDiv:nth-child(1)").css("margin-top", "5px");
            $(".menuIconDiv:nth-child(2)").css("margin-top", "5px"); 
            $(".menuIconDiv:nth-child(3)").css("margin-top", "5px");
            $(".menuIconDiv:nth-child(2)").css("visibility", "visible");
            animating = false;
        }, 500);
    };
    
    function openHeaderNavbar() {
        animating = true;
        // open menu
        $("#navigationButtons").css("left", "0%");
        // animating menu icon
        $(".menuIconDiv:nth-child(2)").css("visibility", "hidden");
        $(".menuIconDiv:nth-child(1)").css("margin-top", "13px");
        $(".menuIconDiv:nth-child(2)").css("margin-top", "-3px");
        $(".menuIconDiv:nth-child(3)").css("margin-top", "-3px");
        setTimeout(function() {
            $(".menuIconDiv:nth-child(1)").css("-webkit-transform", "rotate(45deg)");
            $(".menuIconDiv:nth-child(1)").css("-ms-transform", "rotate(45deg)");
            $(".menuIconDiv:nth-child(1)").css("-moz-transform", "rotate(45deg)");
            $(".menuIconDiv:nth-child(1)").css("-o-transform", "rotate(45deg)");
            $(".menuIconDiv:nth-child(1)").css("transform", "rotate(45deg)");
            $(".menuIconDiv:nth-child(3)").css("-webkit-transform", "rotate(-45deg)");
            $(".menuIconDiv:nth-child(3)").css("-ms-transform", "rotate(-45deg)");
            $(".menuIconDiv:nth-child(3)").css("-moz-transform", "rotate(-45deg)");
            $(".menuIconDiv:nth-child(3)").css("-o-transform", "rotate(-45deg)");
            $(".menuIconDiv:nth-child(3)").css("transform", "rotate(-45deg)");
            animating = false;
        }, 500);
    };
    
    $("header.primary nav .menuIcon").click(function() {
        // toggling header navbar class on click
        $("#navigationButtons").toggleClass("open");
        // toggling header navbar class on click
        $("header.primary nav .menuIcon").toggleClass("active");
        
        if (!$("header.primary nav .menuIcon").hasClass("active") && !$("#navigationButtons").hasClass("open") && !animating) {
            // close menu
            closeHeaderNavbar();
        } else if ($("header.primary nav .menuIcon").hasClass("active") && $("#navigationButtons").hasClass("open") && !animating) {
            // open menu
            openHeaderNavbar();
        }
    });
    
    // header navbar animation upon document click
    $("main.primary, footer.primary").click(function() {
        if ($("header.primary nav .menuIcon").hasClass("active") && $("#navigationButtons").hasClass("open") && !animating) {
            // toggling header navbar class on click
            $("#navigationButtons").toggleClass("open");
            // toggling header navbar class on click
            $("header.primary nav .menuIcon").toggleClass("active");
            closeHeaderNavbar();
        }
    });
=======
// general webpage scripts
$(document).ready(function() {
	// initial page animation
	if (!$("#homeContentWrapper").length) {
		$("#wrapper").hide();
		$("body").prepend("<div id = 'loadingIconContainer' style = 'text-align: center; margin-top: 30vh;'><img id = 'loadingIcon' style = 'width: 200px' src = 'https://s31.postimg.org/s4qpz8nbf/Piggy_s_Head_Icon.png'/><br><div id = 'loadingBar' style = 'background-color: #FFFFFF; border-left: 1px solid #F50057; border-radius: 10px; width: 150px; height: 5px; margin: auto;'></div></div>");
		$("#loadingIcon, #loadingBar").hide();
		$("#loadingIcon, #loadingBar").fadeIn(1000);
		setTimeout(function() {
			$("#loadingBar").animate({borderWidth: "150px"}, 1500);
			setTimeout(function() {
				$("#loadingIconContainer").fadeOut(1000);
				$("#wrapper").delay(1000).fadeIn(1000);
			}, 1700);
		}, 1000);
	}
    
    // header navbar animation
    var animating = false;
    
    // open and close functions
    function closeHeaderNavbar() {
        animating = true;
        // close menu
        $("#navigationButtons").css("left", "-500px");
        // animating menu icon
        $(".menuIconDiv:nth-child(1)").css("-webkit-transform", "rotate(45deg)");
        $(".menuIconDiv:nth-child(1)").css("-ms-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(1)").css("-moz-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(1)").css("-o-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(1)").css("transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(3)").css("-webkit-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(3)").css("-ms-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(3)").css("-moz-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(3)").css("-o-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(3)").css("transform", "rotate(0deg)");
        setTimeout(function() {
            $(".menuIconDiv:nth-child(1)").css("margin-top", "5px");
            $(".menuIconDiv:nth-child(2)").css("margin-top", "5px"); 
            $(".menuIconDiv:nth-child(3)").css("margin-top", "5px");
            $(".menuIconDiv:nth-child(2)").css("visibility", "visible");
            animating = false;
        }, 500);
    };
    
    function openHeaderNavbar() {
        animating = true;
        // open menu
        $("#navigationButtons").css("left", "0%");
        // animating menu icon
        $(".menuIconDiv:nth-child(2)").css("visibility", "hidden");
        $(".menuIconDiv:nth-child(1)").css("margin-top", "13px");
        $(".menuIconDiv:nth-child(2)").css("margin-top", "-3px");
        $(".menuIconDiv:nth-child(3)").css("margin-top", "-3px");
        setTimeout(function() {
            $(".menuIconDiv:nth-child(1)").css("-webkit-transform", "rotate(45deg)");
            $(".menuIconDiv:nth-child(1)").css("-ms-transform", "rotate(45deg)");
            $(".menuIconDiv:nth-child(1)").css("-moz-transform", "rotate(45deg)");
            $(".menuIconDiv:nth-child(1)").css("-o-transform", "rotate(45deg)");
            $(".menuIconDiv:nth-child(1)").css("transform", "rotate(45deg)");
            $(".menuIconDiv:nth-child(3)").css("-webkit-transform", "rotate(-45deg)");
            $(".menuIconDiv:nth-child(3)").css("-ms-transform", "rotate(-45deg)");
            $(".menuIconDiv:nth-child(3)").css("-moz-transform", "rotate(-45deg)");
            $(".menuIconDiv:nth-child(3)").css("-o-transform", "rotate(-45deg)");
            $(".menuIconDiv:nth-child(3)").css("transform", "rotate(-45deg)");
            animating = false;
        }, 500);
    };
    
    $("header.primary nav .menuIcon").click(function() {
        // toggling header navbar class on click
        $("#navigationButtons").toggleClass("open");
        // toggling header navbar class on click
        $("header.primary nav .menuIcon").toggleClass("active");
        
        if (!$("header.primary nav .menuIcon").hasClass("active") && !$("#navigationButtons").hasClass("open") && !animating) {
            // close menu
            closeHeaderNavbar();
        } else if ($("header.primary nav .menuIcon").hasClass("active") && $("#navigationButtons").hasClass("open") && !animating) {
            // open menu
            openHeaderNavbar();
        }
    });
    
    // header navbar animation upon document click
    $("main.primary, footer.primary").click(function() {
        if ($("header.primary nav .menuIcon").hasClass("active") && $("#navigationButtons").hasClass("open") && !animating) {
            // toggling header navbar class on click
            $("#navigationButtons").toggleClass("open");
            // toggling header navbar class on click
            $("header.primary nav .menuIcon").toggleClass("active");
            closeHeaderNavbar();
        }
    });
>>>>>>> 1d5f60f67c038657ee9710a74f7cede72474f804
});