$(document).ready(function(){
	$("#title").hover(function(){
		var newtitle = "<span style='color: red'>&#9825</span> LOVE YOU <span style='color: red'>&#9825</span>";
		$("#title").html(newtitle);
		
	}, function(){
		var oldtitle = "Happy Birthday Mom";
		$("#title").html(oldtitle);	
	});

	$(function() {
  	$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


});