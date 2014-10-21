

// Hide / Show mobile navigation
$('.open-nav-btn').click(function(){
	$('body').addClass('open-nav');
});

$('.mobile-nav a').click(function(){
	$('body').removeClass('open-nav');
});

// Hide / Show contact form
$('.open-contact-form-link').click(function(){
	$('body').addClass('open-contact-form');
	$('body').removeClass('open-nav');
});


$('.close-contact-form-link').click(function(){ 
	$('body').removeClass('open-contact-form');
});



	
var $container = $('.masonry-feed ul');
var $item = $container.find('.masonry-item').eq(0); 

$(window).load(function(){
	
	$('.masonry-feed').show();
	
	// Load Isotop if the browser is bigger than 767px
	if ($(window).width() > 767) {
		
		$('.masonry-feed ul').isotope({
			resizable: false,
			masonry: {
				columnWidth: $container.width() / 4
			},
		});
	}
	
});

// Debounced Resize function
$(window).on("debouncedresize", function( event ) {
	
	$('.masonry-feed ul').isotope({
		resizable: false,
		masonry: {
			columnWidth: $container.width() / 4
		},
	})
	
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
		$('.masonry-feed ul').isotope('shuffle');
	}
	
}); 


// Add current year to .current-year
var currentYear = new Date().getFullYear();
$('.current-year').text(currentYear);


// Form validation
 $('form').validate();