var lastOpened = "";
var lastClicked = "";
var lastThis = "";
var theTime = 300;

setTimeout(function(){
  $('#dummyLi').addClass("removeThis");
}, 300);


$("li.book-item").each(function() {
var $this = $(this);

$this.find(".item-details a.button").on('click', function() {

  var title = $(this).parent().find('.book-item_title').text();
  var author = $(this).parent().find('.author').text();
  var desc = $(this).parent().find('.description').text();

if($("#" + lastOpened).attr("isOpen")=="true"){

} else{
$('#' + lastOpened).attr("class", "book2-item small-12 medium-6 columns shuffle-item shuffle-item--visible out");
//$('#' + lastOpened).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030; overflow:hidden; animation: CloseUp 5s ease-out 0s 1; display:none");
$('#' + lastOpened).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030");
$('#' + lastClicked).removeClass("book3-item");
}

var id="";
var num = $this.attr("pop-up");
id = "moreDetails" + num;
var liNumber = parseInt($this.attr("liNum"));

$('#' + id).find('.item-details').find('#mytable').find('#myTR').find('#details').find('.book2-item_title').text(title);
$('#' + id).find('.item-details').find('#mytable').find('#myTR').find('#details').find('.author').text(author);
$('#' + id).find('.item-details').find('#mytable').find('#myTR').find('#details').find('.description').text(desc);

$("#" + id).attr("class", "mix color-1 book2-item small-12 medium-6 columns shuffle-item shuffle-item--visible active");
//$("#" + id).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030; overflow:hidden; display:inline-block; animation: OpenDown 5s ease-out 0s 1;");
$("#" + id).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030");
$this.addClass("book3-item");

var map;

map = new GMaps({
  el: '.map' + num,
  lat: -12.043333,
  lng: -77.028333
});

map.addMarker({
  lat: -12.043333,
  lng: -77.03,
  title: 'Lima',
  details: {
    database_id: 42,
    author: 'HPNeo'
  },
  click: function(e){
    if(console.log)
      console.log(e);
    alert('You clicked in this marker' + num);
  },
  mouseover: function(e){
    if(console.log)
      console.log(e);
  }
});

if(liNumber%3==0){
$('.arrow-up').css("left", "16%");
} else if(liNumber%3==2){
  $('.arrow-up').css("left", "86%");
} else{
$('.arrow-up').css("left", "86%");
$('.arrow-up').css("left", "50%");
}

if(lastClicked == $this.attr("liNum")){
  if($("#" + id).attr("isOpen")=="false"){
    $("#" + id).attr("isOpen", "true");
    $('#' + lastOpened).attr("class", "book2-item small-12 medium-6 columns shuffle-item shuffle-item--visible out");
    //$('#' + lastOpened).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030; overflow:hidden; animation: CloseUp 5s ease-out 0s 1; display:none");
    $('#' + lastOpened).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030");
    $('#' + lastClicked).removeClass("book3-item");
  }else{
    $("#" + id).attr("isOpen", "false");
    $("#" + id).attr("class", "mix color-1 book2-item small-12 medium-6 columns shuffle-item shuffle-item--visible active");
    //$("#" + id).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030; overflow:hidden; display:inline-block; animation: OpenDown 5s ease-out 0s 1;");
    $("#" + id).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030");
    $this.addClass("book3-item");
  }
}else{
  $("#" + id).attr("isOpen", "false");
}

/*setTimeout(function ascrollto() {
	var etop = $('#' + id).offset().top;
  //alert(etop - 100);
	$('html, body').animate({
	  scrollTop: etop-150
	}, theTime);
}, theTime);*/

setTimeout(function(){
				$('#' + lastOpened).removeClass("out");
        lastOpened = id;
        lastClicked = $this.attr("liNum");
			}, theTime-200);
});
});

$('#Avafilters').on( "click", function() {
  $('#' + lastOpened).attr("class", "book2-item small-12 medium-6 columns shuffle-item shuffle-item--visible");
  //$('#' + lastOpened).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030; overflow:hidden; animation: CloseUp 5s ease-out 0s 1; display:none");
  $('#' + lastOpened).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030");
  $("#" + lastOpened).attr("isOpen", "true");
  $('#' + lastClicked).removeClass("book3-item");
});

$('.filter').on( "click", function() {
  $('#' + lastOpened).attr("class", "book2-item small-12 medium-6 columns shuffle-item shuffle-item--visible");
  //$('#' + lastOpened).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030; overflow:hidden; animation: CloseUp 5s ease-out 0s 1; display:none");
  $('#' + lastOpened).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030");
  $("#" + lastOpened).attr("isOpen", "true");
  $('#' + lastClicked).removeClass("book3-item");
});
