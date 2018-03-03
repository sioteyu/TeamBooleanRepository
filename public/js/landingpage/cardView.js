$.fn.stars = function() {
  return $(this).each(function() {
    var num = $(this).data("star");
    $(this).html($("<span />").width(Math.max(0, Math.min(5, num)) * 12));
  })
};

$("span#c_stars").stars(); 
