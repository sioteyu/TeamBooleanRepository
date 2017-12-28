var myCenter = new google.maps.LatLng(51.308742, -0.320850);
function initialize() {
  var mapProp = {
    center: myCenter,
    zoom: 12,
  };
  var map = new google.maps.Map(document.getElementById("map"), mapProp);

  var marker = new google.maps.Marker({
    position: myCenter,
    map: map
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
