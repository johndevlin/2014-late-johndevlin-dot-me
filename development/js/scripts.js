

// Hide / Show mobile navigation
$('.open-nav-btn').click(function(){
	$('body').addClass('open-nav');
	$('body').addClass('blur');
});

$('.mobile-nav a').click(function(){
	$('body').removeClass('open-nav');
	$('body').removeClass('blur');
});

// Hide / Show contact form
$('.open-contact-form-link').click(function(){
	$('body').addClass('open-contact-form');
	$('body').removeClass('open-nav');
	$('body').addClass('blur');
}); 


$('.close-contact-form-link').click(function(){ 
	$('body').removeClass('open-contact-form');
	$('body').removeClass('blur');
});



	
var $container = $('.masonry-feed ul');
var $item = $container.find('.masonry-item').eq(0); 

$(window).load(function(){
	
	$('.preloader').hide();
	$('.masonry-feed ul').show();
	
	// Load Isotop if the browser is bigger than 767px
	if ($(window).width() > 767) {
		
		$container.isotope({
			resizable: false,
			masonry: {
				columnWidth: $container.width() / 4
			},
		});
	}
	
	$('html').addClass('isotope-loaded');
	
});

// Debounced Resize function
$(window).on("debouncedresize", function( event ) {
	
	if ($(window).width() > 767) {
		$container.isotope('destroy');
		
		$container.isotope({
			resizable: false,
			masonry: {
				columnWidth: $container.width() / 4
			},
		});
	}
	
});


// Return false class for buttons
$('.return-false').click(function() {
	return false; 
});


// jQuery placeholder listener 
$('input, textarea').placeholder();


// Do X ESC 
$(document).keyup(function(e) {
	
	if (e.keyCode == 27) { 
		
	}
	
}); 


// Add current year to .current-year
var currentYear = new Date().getFullYear();
$('.current-year').text(currentYear);


// Form validation
 $('form').validate();