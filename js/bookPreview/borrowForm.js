$(window).scroll(function() {
   var hT = $('.comments-title').offset().top,
       hH = $('.comments-title').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
        $('#borrowForm').attr('style', 'position:fixed; top:15vh');
  }else{
        $('#borrowForm').removeAttr('style');
        }
   });
