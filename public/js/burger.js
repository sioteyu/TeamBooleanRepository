var menuBoolean = false;

$('.nav-wrapper').click(function(ev) {
			$('#nav-trigger-anim').toggleClass('active');
			if (menuBoolean == false) {
						$('#sideMenu').removeClass("fadeOutLeft animated");
						$('#sideMenu').css("display", "");
						$('#sideMenu').addClass("fadeInLeft animated");
						menuBoolean = true;
			} else {
						$('#sideMenu').removeClass("fadeInLeft animated").addClass("fadeOutLeft animated").delay(400).queue(function (next) {
    $(this).css('display', 'none');
    next();
  });
						menuBoolean = false;
			}
});
