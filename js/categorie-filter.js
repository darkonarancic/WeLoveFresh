$(function(){
	$('.filter-lists li').hover(
		function(){
			$(this).parents('.filter-lists').addClass('hovered');
		},
		function(){
			$(this).parents('.filter-lists').removeClass('hovered');
		}
	);
});
