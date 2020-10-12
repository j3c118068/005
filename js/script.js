
jQuery(document).ready(function() {
	$('.garis button').on('click', function(){
		$('.top-menu').toggleClass('active');
		$(this).toggleClass('menu-closed');
	});
	
});
