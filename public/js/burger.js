var menuBoolean = false;
var prev = $("#flip").attr("style");
var prevTransform = prev.split("(");
var update = prevTransform[1].split(")");

$('.nav-wrapper').click(function(ev) {
			$('#nav-trigger-anim').toggleClass('active');
			if (menuBoolean == false) {
						$('#sideMenu').removeClass("fadeOutLeft animated");
						$('#sideMenu').css("display", "");
						$('#sideMenu').addClass("fadeInLeft animated");
						$('.flipster__container').css("transform", "translateX(20%)");
						menuBoolean = true;
			} else {
						$('#sideMenu').removeClass("fadeInLeft animated").addClass("fadeOutLeft animated").delay(400).queue(function (next) {
    $(this).css('display', 'none');
    next();
  });
						$('.flipster__container').css("transform", "translateX("+update[0]+")");
						menuBoolean = false;
			}
});
