var lastOpened = "";
var lastClicked = "";
var theTime = 300;

setTimeout(function(){
  $('#dummyLi').addClass("removeThis");
}, 300);

$("li.book-item").each(function() {
var $this = $(this);

$this.find(".item-details a.button").on('click', function() {

if($("#" + lastOpened).attr("isOpen")=="true"){

} else{
$('#' + lastOpened).attr("class", "book2-item small-12 medium-6 columns shuffle-item shuffle-item--visible out");
//$('#' + lastOpened).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030; overflow:hidden; animation: CloseUp 5s ease-out 0s 1; display:none");
$('#' + lastOpened).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030");
}

var id="";
var num = $this.attr("pop-up");
id = "moreDetails" + num;
var liNumber = parseInt($this.attr("liNum"));


$("#" + id).attr("class", "mix color-1 book2-item small-12 medium-6 columns shuffle-item shuffle-item--visible active");
//$("#" + id).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030; overflow:hidden; display:inline-block; animation: OpenDown 5s ease-out 0s 1;");
$("#" + id).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030");

if(liNumber%3==0){
$('.arrow-up').css("left", "86%");
} else if(liNumber%3==2){
$('.arrow-up').css("left", "50%");
} else{
$('.arrow-up').css("left", "16%");
}

if(lastClicked == $this.attr("liNum")){
  if($("#" + id).attr("isOpen")=="false"){
    $("#" + id).attr("isOpen", "true");
    $('#' + lastOpened).attr("class", "book2-item small-12 medium-6 columns shuffle-item shuffle-item--visible out");
    //$('#' + lastOpened).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030; overflow:hidden; animation: CloseUp 5s ease-out 0s 1; display:none");
    $('#' + lastOpened).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030");

  }else{
    $("#" + id).attr("isOpen", "false");
    $("#" + id).attr("class", "mix color-1 book2-item small-12 medium-6 columns shuffle-item shuffle-item--visible active");
    //$("#" + id).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030; overflow:hidden; display:inline-block; animation: OpenDown 5s ease-out 0s 1;");
    $("#" + id).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030");
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
  $("#" + lastOpened).attr("isOpen", "true")
});

$('.filter').on( "click", function() {
  $('#' + lastOpened).attr("class", "book2-item small-12 medium-6 columns shuffle-item shuffle-item--visible");
  //$('#' + lastOpened).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030; overflow:hidden; animation: CloseUp 5s ease-out 0s 1; display:none");
  $('#' + lastOpened).attr("style", "width:100%; visibility: visible; will-change: transform; opacity: 1; transform: translate(0px, 2475px) scale(1); transition: transform 250ms ease, opacity 250ms ease; background-color:#303030");
  $("#" + lastOpened).attr("isOpen", "true")
});
