

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


// Debounced Resize function
$(window).on("debouncedresize", function( event ) {
	// Guff
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
		// Guff
	}
	
}); 


// Add current year to .current-year
var currentYear = new Date().getFullYear();
$('.current-year').text(currentYear);


// Form validation
 $('.some-form').validate({
 	rules: {
 		inputname: {
 			required: true,
 			email: true,
 			minlength: 10
 		},
 	}
 });