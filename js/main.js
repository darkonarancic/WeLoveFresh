$(document).ready(function() {
    $('.menu-link').bigSlide();
    
    if($('#slideshow').size() > 0){
		$('#slideshow').bjqs({
		    height      : 275,
		    width       : 940,
		    responsive  : true,
		    animspeed	: 5000
		});
	}
});