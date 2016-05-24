$(document).ready(function() {

	function parallaxbg(){
    var scrolled = $(window).scrollTop()
	$("#headertitle").css("top", -(scrolled *1.35) +"px")
	}

	$(window).scroll(function(){
    parallaxbg();

    var header = $("#changePoint");
	var headerPosition = header.position();
	var navHeight = $("nav").height;

    if ($(window).scrollTop() > headerPosition.top){
			$("nav").css("background-color", "black");
		}
		if ($(window).scrollTop() < headerPosition.top){
			$("nav").css("background-color", "transparent");
		}

	})
	
})