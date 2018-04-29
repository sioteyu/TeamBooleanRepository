$('.date').hover(function(){
    var thisID = $(this).attr('id');
    $('#t' + thisID).toggle();
});
