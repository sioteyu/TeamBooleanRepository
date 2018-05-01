$('.date').click(function(){
    var thisID = $(this).attr('id');
    $('#t' + thisID).toggle();
});
