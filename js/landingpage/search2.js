$(function(){
  var $dropdown = $('#dropdown2'),
      $currentSelection = $('.current-selection');

  var current = "";
  // set top value of dropdown to vertically center
  $dropdown.css('top',($currentSelection.parent().outerHeight() - $dropdown.outerHeight())/2);

  // set the initial selection text
  $currentSelection.html('<i class="fa fa-book"></i>   ' + $(this)
  .find('option:selected').text());

  // change the selection text to match dropdown selected item
  $('#dropdown2').change(function(){

    current = $(this)
    .find('option:selected').text();

    var style = $('#' + current).attr('icon-type');
    $currentSelection.html('<i class="fa fa-'+ style +'"></i>   ' + current);

    if(style == 'user'){
      $('#search-box').attr('placeholder', 'Who are you looking for?');
    } else{
      $('#search-box').attr('placeholder', 'What are you looking for?');
    }
  });
});
