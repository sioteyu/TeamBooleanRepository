var currentPos = 0;

$('.right-arrow').on('click', function(){
  $('.left-arrow').removeClass('disabled');

  if(currentPos == 0){
    currentPos = currentPos + 323;
  }
  else{
    currentPos = currentPos + 323 + 1;
  }

  if(currentPos==2267){
    $('.right-arrow').addClass('disabled');
  }
  $('.inner-moving-container').attr('style', 'left:-' + currentPos + 'px');
});

$('.left-arrow').on('click', function(){
  currentPos = currentPos - 323 - 1;

  if(currentPos==-1){
    $('.left-arrow').addClass('disabled');
  }

  if(currentPos==1943){
    $('.right-arrow').removeClass('disabled');
  }
  $('.inner-moving-container').attr('style', 'left:-' + Math.abs(currentPos) + 'px');
});
