// JQUERY
$(function() {
	// Users can skip the loading process if they want.
	$('.Skip').click(function() {
		$('.overlay, .body').addClass('loaded');
	})
	// Will wait for everything on the page to load.
	$(window).bind('load', function() {
		$('.overlay, .body').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
		}, 1000);
	});
	// Will load page after 1min for users cannnot load properly
	setTimeout(function() {
		$('.overlay, .body').addClass('loaded');
	}, 60000);
	// Random text to keep it fresh dawg.
	var names = ['Loading images...', 'Generating Colours...', 'Getting Fonts...', 'Testing connection...'];
	setInterval(function() {
	  var rand = Math.floor(Math.random() * 4);
		$('#name').html(names[rand]);
	}, 3500);

});
