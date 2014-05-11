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
    if($('input:checkbox').size() > 0){
		$('input:checkbox').iCheck({
	    	checkboxClass: 'icheckbox_flat-green'
  		});
	}
    if($('.page-faq').size() > 0){
        $('.table-content.accordion').bind('click', function(e){
            if(!$('.table-content.accordion').is(':animated')){
                if(!$('.accordion-details',this).is(':visible')) {
                    $('.accordion-details').not(this).slideUp(500);
                    $('.table-content.accordion').not(this).removeClass('active');
                    $(this).addClass('active');
                    $('.accordion-details',this).slideDown(500);
                }
                else {
                    $(this).removeClass('active');
                    $('.accordion-details',this).slideUp(500);
                }
            }
        });
    }
});