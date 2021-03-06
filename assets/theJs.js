function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('page', true);
    show('loading', false);
});

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

$('#helloType').typeIt({
    strings: ["great looking sites.", "web apps.", "video games.", "your next project?"],
     speed: 110,
     lifeLike: true,
     breakLines: false,
     deleteDelay: 2000,
     autoStart: true,
     loop: true
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

var ffIndex = 1;
ffShowDivs(ffIndex);

function ffPlus(n) {
    ffShowDivs(ffIndex += n);
}

function ffShowDivs(n) {
    var i;
    var x = document.getElementsByClassName("fairfimage");
    if (n > x.length) {ffIndex = 1} 
    if (n < 1) {ffIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[ffIndex-1].style.display = "block"; 
}

$("#ffPrev").click(function(){
    ffPlus(-1)
});

$("#ffNext").click(function(){
    ffPlus(1)
});

$('.aboutCat').click(function(){
    $(".aboutCat").removeClass("aboutActive");
    $(".aboutImg").removeClass("activeImg");
    $(this).addClass("aboutActive");
    $(this).find($(".aboutImg")).addClass("activeImg");
});

$("#nerd1").click(function(){
    var nerdImg = $("#nerd1Img");
    nerdImg.animate({height: "35px", width: "35px"}, 200)
    nerdImg.animate({height: "50px", width: "50px"}, 200)
});

$("#bball").click(function(){
    var bballImg = $("#bballImg");
    bballImg.animate({height: "35px", width: "35px"}, 200)
    bballImg.animate({height: "50px", width: "50px"}, 200)
});

$("#brain").click(function(){
    var brainImg = $("#brainImg");
    brainImg.animate({height: "35px", width: "35px"}, 200)
    brainImg.animate({height: "50px", width: "50px"}, 200)
});

$("#coffee").click(function(){
    var coffeeImg = $("#coffeeImg");
    coffeeImg.animate({height: "35px", width: "35px"}, 200)
    coffeeImg.animate({height: "50px", width: "50px"}, 200)
});

$("#movie").click(function(){
    var movieImg = $("#movieImg");
    movieImg.animate({height: "35px", width: "35px"}, 200)
    movieImg.animate({height: "50px", width: "50px"}, 200)
});

$(document).on("scroll", onScroll);
 
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
 
            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
 
            var target = this.hash;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });
 
    function onScroll(event){
        var scrollPosition = $(document).scrollTop();
        $('nav a').each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            if (refElement.position().top - (refElement.height()/3) <= scrollPosition && refElement.position().top + refElement.height()> scrollPosition) {
                $('nav ul li a').removeClass("active");
                currentLink.addClass("active");
            }
            else{
                currentLink.removeClass("active");
            }
        });

}