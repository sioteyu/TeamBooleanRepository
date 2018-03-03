$('.search-box').click(function() {
  event.stopPropagation();
  //$('.form-wrapper').addClass('active');
  $(this).children("input").focus();
  $('.search-results').addClass('active');
  if($(".search-box").val().length >= 1) {
      $('#example-result').addClass('hidden');
    } else {
      $('#example-result').removeClass('hidden');
    }
});

$(window).click(function() {
  //$('.form-wrapper').removeClass('active');
  $('.search-results').removeClass('active');
});

$("search-box").keyup(function() {
    if($("search-box").val().length >= 1) {
      $('#example-result').addClass('hidden');
    } else {
      $('#example-result').removeClass('hidden');
    }
});
