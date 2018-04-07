/*$("#addFave1").click(function(){
  //$('.container10').css('display', 'unset').delay(1000).fadeOut('slow');
  $('.container10').toggle().delay(1000).fadeOut('slow');
});

$("#addFave2").click(function(){
  //$('.container10').css('display', 'unset').delay(1000).fadeOut('slow');
  $('.container10').toggle().delay(1000).fadeOut('slow');
});*/

$( ".addFave2" ).click(function() {
    if ( $( ".addFave2" ).attr("switch")=='on' ) {
        $( ".addFave2" ).attr('switch', 'off');
        $('.myFave1').text('Add to favorites');
    } else {
        $( ".addFave2" ).attr('switch', 'on');
        $('.container10').css('display', 'unset').delay(1000).fadeOut('slow');
        $('.myFave1').text('Remove to favorites');
    }
});
