$(document).ready(function(){
  $(".searchBut").on("click", function() {
    $('#site1').addClass('open');
    $('.anothaBox').css('z-index','10');
    $('#sideMenu').css('z-index', '10');
    $('#s').css('width','60%');
  });

  $("#close1").on("click", function() {
    $('#site1').removeClass('open');
    $('.anothaBox').css('z-index','70');
    $('#sideMenu').css('z-index', '60');
    $('#s').css('width','0');
  });

  $("#upload").on("click", function() {
    $('#site2').addClass('open');
    $('.anothaBox').css('z-index','10');
    $('#sideMenu').css('z-index', '10');
  });

  $("#close2").on("click", function() {
    $('#site2').removeClass('open');
    $('.anothaBox').css('z-index','70');
    $('#sideMenu').css('z-index', '60');
  });

  $(".owner").on("click", function() {
    $('#site3').addClass('open');
    $('.anothaBox').css('z-index','10');
    $('#sideMenu').css('z-index', '10');
  });

  $("#close3").on("click", function() {
    $('#site3').removeClass('open');
    $('.anothaBox').css('z-index','70');
    $('#sideMenu').css('z-index', '60');
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
