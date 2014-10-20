

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


$('.masonry-feed ul').isotope();

$(window).load(function(){
	
	$('.masonry-feed').show();
	
	var container = $('.masonry-feed ul');
	var item = container.find('.masonry-feed li').eq(0); 
	
	$('.masonry-feed ul').isotope({
		resizable: false,
		masonry: {
			columnWidth: container.width() / 4
		},
	});
	
	$(window).smartresize(function(){
		var itemWidth = $item.outerWidth(true);
		container.css({ width: item * 4 }).isotope('reLayout');
	}).smartresize();
	
});
	
BackgroundCheck.init({
	targets: '.masonry-item',
	images: '.work-item-artwork'
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
		$('.masonry-feed ul').isotope('shuffle');
	}
	
}); 


// Add current year to .current-year
var currentYear = new Date().getFullYear();
$('.current-year').text(currentYear);


// Form validation
 $('form').validate();