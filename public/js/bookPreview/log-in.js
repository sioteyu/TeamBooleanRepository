$('.log-in').click(function(){
  $('.here').css('display', 'unset');
  $('.login-page').css('display', 'unset');
  $('#hey').css('overflow', 'hidden');
  $('.register-form').css('display', 'none');
  $('.login-form').css('display', 'unset');
  $('.share-form').css('display', 'none');
  $('.form2 h1').text('Log-in');
  $('.locate').css('display', 'none');
});

$('.sign-up').click(function(){
  $('.here').css('display', 'unset');
  $('.login-page').css('display', 'unset');
  $('#hey').css('overflow', 'hidden');
  $('.register-form').css('display', 'unset');
  $('.login-form').css('display', 'none');
  $('.share-form').css('display', 'none');
  $('.form2 h1').text('Sign-up');
  $('.locate').css('display', 'none');
});

$('#share-this').click(function(){
  $('.here').css('display', 'unset');
  $('.login-page').css('display', 'unset');
  $('#hey').css('overflow', 'hidden');
  $('.register-form').css('display', 'none');
  $('.login-form').css('display', 'none');
  $('.share-form').css('display', 'unset');
  $('.form2 h1').text('Share via');
});

$('#share-here').click(function(){
  $('.here').css('display', 'unset');
  $('.login-page').css('display', 'unset');
  $('#hey').css('overflow', 'hidden');
  $('.register-form').css('display', 'none');
  $('.login-form').css('display', 'none');
  $('.share-form').css('display', 'unset');
  $('.form2 h1').text('Share via');
});

$('.here').click(function(){
  $('.here').css('display', 'none');
  $('.login-page').css('display', 'none');
  $('#hey').css('overflow', 'auto');
  $('#respond').attr('style', '');
  $('#respond').find('form').find('#pixrating_title').attr('value', '');
  $('#respond').find('form').find('.comment-form-comment').find('textarea').text('');
  $('#respond').find('#commentform').find('.form-submit').find('#submit').attr('value', 'Submit your Review');
  $('#respond').find('form').attr('action', '/comment');
  $('#respond2').attr('style', 'position:fixed;top:20%; z-index:1000; visibility:hidden');
});

$('.mssg1').click(function(){
  $('.register-form').css('display', 'unset');
  $('.login-form').css('display', 'none');
  $('.form2 h1').text('Sign-up');
});

$('.mssg2').click(function(){
  $('.register-form').css('display', 'none');
  $('.login-form').css('display', 'unset');
  $('.form2 h1').text('Log-in');
});


$( ".searching" ).click(function() {
  $('.search-results').css('opacity', '1')
});
