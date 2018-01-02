$(document).ready(function(){
  $(".owner").on("click", function() {
    $('.card').removeClass("fadeOut");
    $('.mainChart').removeClass("deblur");
    $('.mainChart').addClass("blur");
    $('.card').css("display", "flex");
    $('.card').addClass("fadeInUp animated");
    $('.inviBox').css("display", "block");
  });

  $('.x').on("click", function(){
      $('.inviBox').css("display", "none");
        $('.mainChart').addClass("deblur");
        $('.card').addClass("fadeOut animated").removeClass("fadeInUp");
  });
});
