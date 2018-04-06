$(document).ready(function(){
  $("#Login").on("click", function() {
    $('.form').removeClass("fadeOut");
    $('.main').removeClass("deblur");
    $('.main').addClass("blur");
    $('.form').css("z-index", "2");
    $('.form').addClass("fadeInUp animated");
  });

  $('.main').on("click", function(){
        $('.main').addClass("deblur");
        $('.form').addClass("fadeOut animated").removeClass("fadeInUp");
  });
});
