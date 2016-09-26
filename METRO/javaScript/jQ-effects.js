$(document).ready(function(){
	$(function(){
		$('.activ-info-catalog').click(function(){
			$('.top-slider').toggle(2000);
		});
	});


	var touch = $('#touch-menu');
	var menu = $('.nav');

	$(touch).on('click', function(e){
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 760 && menu.is(':hidden')){
			menu.removeAttr('style');
		}
	});


	

	 $(window).load(function(){
        $("[data-toggle]").click(function() {
          var toggle_el = $(this).data("toggle");
          $(toggle_el).toggleClass("open-sidebar");
        });
         $(".swipe-area").swipe({
              swipeStatus:function(event, phase, direction, distance, duration, fingers)
                  {
                      if (phase=="move" && direction =="right") {
                           $(".container").addClass("open-sidebar");
                           return false;
                      }
                      if (phase=="move" && direction =="left") {
                           $(".container").removeClass("open-sidebar");
                           return false;
                      }
                  }
          }); 
      });


		$(".bascet-info ul ").niceScroll({cursorcolor:'#DFE6E8',cursoropacitymin:'0.6',cursoropacitymax:'0.8',cursorwidth:'3px',cursorborder:'none',railalign:'left'});

	    $('body').addClass('js');
		  var $menu = $('#menu'),
		    $menulink = $('.menu-link');
		  
		$menulink.click(function() {
		  $menulink.toggleClass('active');
		  $menu.toggleClass('active');
		  return false;
		});

		 
		
});
// конец ready