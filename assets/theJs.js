$(document).ready(function() {

	var topOfOthDiv = $("#changePoint").top;

	function parallaxbg(){
    var scrolled = $(window).scrollTop()
	$("#headertitle").css("top", -(scrolled *1.35) +"px")
	}

	$(window).scroll(function(){
    parallaxbg();

    if($(window).scrollTop() > topOfOthDiv) {

 		$("#nav").css("background-color", "black"); //reached the desired point -- show div
        }

	})


	
})