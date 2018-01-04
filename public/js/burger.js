var menuBoolean = false;

//if ($('#cover').attr("active") == "true"){
var prev = $("#flip").attr("style");
var prevTransform = prev.split("(");
var update = prevTransform[1].split(")");
//}else{
/*var prev1 = $("#flip1").attr("style");
var prevTransform1 = prev.split("(");
var update1 = prevTransform1[1].split(")");*/
//}

$('.nav-wrapper').click(function(ev) {
			$('#nav-trigger-anim').toggleClass('active');
			if (menuBoolean == false) {
						$('#sideMenu').removeClass("fadeOutLeft animated");
						$('#sideMenu').css("display", "");
						$('#sideMenu').addClass("fadeInLeft animated");
						if($('#cover').attr("active") == "true"){
							$('.flipster__container').css("transform", "translateX(20%)");
						} else{
							$('.flipster__container').css("transform", "translateX(0%)");
						}
						menuBoolean = true;
			} else {
						$('#sideMenu').removeClass("fadeInLeft animated").addClass("fadeOutLeft animated").delay(400).queue(function (next) {
    $(this).css('display', 'none');
    next();
  });
						//if ($('#cover').attr("active") == "true"){
							$('.flipster__container').css("transform", "translateX("+update[0]+")");
						/*}else{
							$('.flipster__container').css("transform", "translateX("+update1[0]+")");
						}*/
						menuBoolean = false;
			}
});
