var wlf = {
	app:{}
};

$(document).ready(function() {
	if($('.menu-link').size() > 0){
    	$('.menu-link').bigSlide();
   	}
   	
    if($('#slideshow').size() > 0){
		$('#slideshow').bjqs({
		    height      : 275,
		    width       : 940,
		    responsive  : true,
		    animspeed	: 5000
		});
	}
    if($('.landing-slide').size() > 0){
        $('.landing-slide').bxSlider({
            slideWidth: 750,
            minSlides: 4,
            maxSlides: 4,
            slideMargin: 0
        });
    }
    if($('.cart-trigger').size() > 0) {
    	$('.cart-trigger').bind('click', function(e){
    		e.preventDefault();
    		$(this).parents('.right-basket').toggleClass('active');
    		$('.cart-overflow').toggleClass('active');
    	});
    }
});