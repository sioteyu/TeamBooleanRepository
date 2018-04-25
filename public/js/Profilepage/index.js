var previous = $('.link');

$('.link').click(function(){
  $(previous).children().children().css('color', 'rgba( 0, 0, 0, 0.4 )');
  $(previous).removeClass('is-active');
  $(this).addClass('is-active');
  $(this).children().children().css('color', '#5d9cec');
});
