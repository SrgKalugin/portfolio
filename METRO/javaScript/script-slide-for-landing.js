$(document).ready(function() {
  
   
	$('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: true,
    itemWidth:100,
    itemMargin: 5,
    asNavFor: '#slider',
	easing: 'easeInElastic',
    directionNav :true,
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: true,
    sync: "#carousel",
	easing: 'easeInElastic',
  });
});
