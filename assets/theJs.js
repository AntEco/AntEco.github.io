$(document).ready(function() {

	function parallaxbg(){
    var scrolled = $(window).scrollTop()
	$("#headertitle").css("top", -(scrolled * .5) +"px")
	}

	$(window).scroll(function(){
    parallaxbg();

    var $el = $('#landing');  //record the elem so you don't crawl the DOM everytime  
	var bottom = $el.position().top + $el.outerHeight(true);

    if (($(window).scrollTop() + 48) > bottom){
			$("nav").addClass("changeNav");
		}
		if (($(window).scrollTop() + 48) < bottom){
			$("nav").removeClass("changeNav");
		}

	});

	$(function() {
  		$('a[href*="#"]:not([href="#"])').click(function() {
    		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      	var target = $(this.hash);
     	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      	if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 55)
        }, 1000);
        return false;
      	}
    	}
  	});
	});

	$('.single-item').slick({
		dots: true,
  		slidesToShow: 1,
  		fade: true,
  		centerMode: true,
  		speed: 1000
  	});
})