$(document).ready(function(){
  $("#Login").on("click", function() {
    //$('.main').fadeTo("slow",0.5);
    $('.form').removeClass("fadeOut");
    $('.main').removeClass("deblur");
    $('.main').addClass("blur");
    $('.form').css("z-index", "2");
    $('.form').addClass("fadeInUp animated");
  });

  $('.main').on("click", function(){
        $('.main').addClass("deblur");
        $('.form').addClass("fadeOut animated").removeClass("fadeInUp");

        /*.delay(600).queue( function(next){
          $(this).css("z-index", "0");
          $(this).removeClass("fadeInUp animated");
          $(this).removeClass("fadeOut");
        });
        */
  });
});
