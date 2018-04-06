$(document).ready(function(){

  $('#coverflow').coverflow({
    active: 3,
    select: function(event, ui) {
      console.log();
    }
  });

  $('.ui-state-active a').click(function() {
    window.location = $this.attr('href');
  });

  $('#coverflow-background .fa-chevron-right').click(function() {
    $('#coverflow').coverflow('next');
  });

  $('#coverflow-background .fa-chevron-left').click(function() {
    $('#coverflow').coverflow('prev');
  });

  $("body").keydown(function(e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $('#coverflow').coverflow('prev');
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $('#coverflow').coverflow('next');
    }
  });

});
