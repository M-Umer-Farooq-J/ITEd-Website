$(document).ready(function(){
	$("#services1").mouseenter(function(){
		$(this).attr("src", "/images/web-design.gif");
	});
	$("#services1").mouseleave(function(){
		$(this).attr("src", "/images/webdesign.png");
	});
});

$(document).ready(function(){
	$("#services2").mouseenter(function(){
		$(this).attr("src", "/images/web-develop.gif");
	});
	$("#services2").mouseleave(function(){
		$(this).attr("src", "/images/webdevelopment.png");
	});
});

$(document).ready(function(){
	$("#services3").mouseenter(function(){
		$(this).attr("src", "/images/seo.gif");
	});
	$("#services3").mouseleave(function(){
		$(this).attr("src", "/images/seo.png");
	});
});

$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $(".navbar").removeClass("navbar").addClass("navbar-default navbar-fixed-top");
      //$(".navbar").switchClass("navbar", "navbar-default navbar-fixed-top", 1000);
			
			
    } else {
      $(".navbar-default").removeClass("navbar-fixed-top navbar-default").addClass("navbar");
    }
  });
});