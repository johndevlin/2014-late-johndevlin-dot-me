

/********************************

	Some scripts I regularly use. 
	-----------------------------
	
	It's doubtful these will be
	used in every project, please
	remove any unused script. 
	
*/

// Konami code
cheet('↑ ↑ ↓ ↓ ← → ← → b a', function() { 
	alert('Voilà!'); 
});

// Moving identity 
cheet('↑', function() { 
	$('header h1').addClass('move-on-up-now');
	
	setTimeout(function() {
		$('header h1').removeClass('move-on-up-now');
	}, 310);
});

cheet('↓', function() { 
	$('header h1').addClass('get-on-down');
	
	setTimeout(function() {
		$('header h1').removeClass('get-on-down');
	}, 310);
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