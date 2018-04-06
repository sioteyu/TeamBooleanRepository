var myCenter = new google.maps.LatLng(14.556604258089994, 121.01609945297241);
function initialize() {
  var mapProp = {
    center: myCenter,
    zoom: 14,
  };
  var map = new google.maps.Map(document.getElementById("map"), mapProp);

  var marker = new google.maps.Marker({
    position: myCenter,
    map: map
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
