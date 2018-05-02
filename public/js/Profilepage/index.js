var previous = $('.link');

$('.link').click(function(){
  $(previous).children().children().css('color', 'rgba( 0, 0, 0, 0.4 )');
  $(previous).removeClass('is-active');
  var prevx = $(previous).children().attr('id');
  $('#grid' + prevx).attr('style', 'display:none;');

  $(this).addClass('is-active');
  $(this).children().children().css('color', '#5d9cec');
  var x = $(this).children().attr('id');
  $('#grid' + x).attr('style', 'display:unset;');

  previous = this
});
