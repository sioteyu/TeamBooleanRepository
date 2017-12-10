$(document).ready(function(){
  $("#Login").on("click", function() {
    //$('.main').fadeTo("slow",0.5);
    $('.main').removeClass("deblur");
    $('.main').addClass("blur");
  });

  $('.main').on("click", function(){
        $('.main').addClass("deblur");
  });
});
