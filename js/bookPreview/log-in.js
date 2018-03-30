$('.log-in').click(function(){
  $('.here').css('display', 'unset');
  $('.login-page').css('display', 'unset');
  $('#hey').css('overflow', 'hidden');
  $('.register-form').css('display', 'none');
  $('.login-form').css('display', 'unset');
  $('.form2 h1').text('Log-in');
});

$('.here').click(function(){
  $('.here').css('display', 'none');
  $('.login-page').css('display', 'none');
  $('#hey').css('overflow', 'auto');
});

$('.sign-up').click(function(){
  $('.here').css('display', 'unset');
  $('.login-page').css('display', 'unset');
  $('#hey').css('overflow', 'hidden');
  $('.register-form').css('display', 'unset');
  $('.login-form').css('display', 'none');
  $('.form2 h1').text('Sign-up');
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
