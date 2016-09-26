$(document).ready(function(){ 

	// open mob menu
	    $('.open-menu').click(function() {
	        $('.mobile-navigation-menu').fadeIn(500);
	    });

    // close mob menu
	    $('.close-menu').click(function() { 
	        $('.mobile-navigation-menu').fadeOut(500);
	         
	    });
   
        // vid-polosi-prokrutki 

	 $(".featurs").niceScroll({background:"#E5E5E5",cursorcolor:'#000',cursoropacitymin:'0.9',cursoropacitymax:'1',cursorwidth:'7px',cursorborder:'none',railalign:'right'});

		  

}); 
// end READY