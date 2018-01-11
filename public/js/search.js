$(document).ready(function(){
  $(".searchBut").on("click", function() {
    $('#site1').addClass('open');
  });

  $("#close1").on("click", function() {
    $('#site1').removeClass('open');
  });

  $("#upload").on("click", function() {
    $('#site2').addClass('open');
  });

  $("#close2").on("click", function() {
    $('#site2').removeClass('open');
  });

  /*jQuery('#site1').click(function(){
    jQuery('#site1').removeClass('open');
  }).children().click(function(e) {
    return false;
  });

  $("#upload").on("click", function() {
    $('#site2').addClass('open');
  });

  jQuery('#site2').click(function(){
    jQuery('#site2').removeClass('open');
  }).children().click(function(e) {
    return false;
  });*/
});
