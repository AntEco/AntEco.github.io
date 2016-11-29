$(document).ready(function() {

//smooth scrolls to link without changing the url
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000);
        return false;
        }
      }
    });
  });
//fade in content on landing
$("#helloContent1").fadeIn(2000).promise().done(function() {
    $('#helloContent2').fadeIn(2000);
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var x = document.getElementsByClassName("projectTitle");
    if (n > x.length){
      slideIndex = 1
    }
    else if (n < 1){
      slideIndex = x.length
    };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block";
    var y = document.getElementsByClassName("projectDescribe");
    if (n > y.length){
      slideIndex = 1
    }
    else if (n < 1){
      slideIndex = y.length
    };
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none"; 
    }
    y[slideIndex-1].style.display = "block";
    var z = document.getElementsByClassName("project");
    if (n > z.length){
      slideIndex = 1
    }
    else if (n < 1){
      slideIndex = z.length
    };
    for (i = 0; i < z.length; i++) {
        z[i].style.display = "none"; 
    }
    z[slideIndex-1].style.display = "block"; 
}

$("#prevArrow").click(function(){
    plusDivs(-1)
});

$("#nextArrow").click(function(){
  plusDivs(1)
});

// $('.carousel').slick({

//   dots: true,
//   slidesToShow: 1,
//   fade: true,
//   centerMode: true,
//   speed: 2000
// });

var carSlideIndex = 1;

carShowDivs(carSlideIndex);

function carPlusDivs(n) {
    carShowDivs(carSlideIndex += n);
}

function carShowDivs(n) {
    var i;
    var x = document.getElementsByClassName("fairfimage");
    if (n > x.length) {carSlideIndex = 1} 
    if (n < 1) {carSlideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[carSlideIndex-1].style.display = "block"; 
}

$(".leftCarArrow").click(function(){
    carPlusDivs(-1)
});

$(".rightCarArrow").click(function(){
    carPlusDivs(1)
});



// $(window).resize(function() {
//   var img = $('.fairfimage');
//   img.style.width = "100%";
// });

})