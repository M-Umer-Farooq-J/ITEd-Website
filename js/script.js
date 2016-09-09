$(document).ready(function(){
	$("#service-link1").mouseenter(function(){
		$("#services1").attr("src", "/images/web-design.gif");
	});
	$("#service-link1").mouseleave(function(){
		$("#services1").attr("src", "/images/webdesign.png");
	});

	$("#service-link2").mouseenter(function(){
		$("#services2").attr("src", "/images/web-develop.gif");
	});
	$("#service-link2").mouseleave(function(){
		$("#services2").attr("src", "/images/webdevelopment.png");
	});
	
	$("#service-link3").mouseenter(function(){
		$("#services3").attr("src", "/images/seo.gif");
	});
	$("#service-link3").mouseleave(function(){
		$("#services3").attr("src", "/images/seo.png");
	});
	
  $(window).scroll(function() {
    if ($(document).scrollTop() > 40) {
      $(".navbar").removeClass("navbar").addClass("navbar-default animated slideInDown navbar-fixed-top");
    } else {
      $(".navbar-default").removeClass("navbar-fixed-top animated slideInDown navbar-default").addClass("navbar");
    }
  });
});