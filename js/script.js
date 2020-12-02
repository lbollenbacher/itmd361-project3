// Map 

function initMap() {
  var map = document.getElementById('canvas');
  var mischyLocation = new google.maps.LatLng(41.88496, -87.62733);
  var mapOptions = {
    center: mischyLocation,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    }
  };
  
// Marker
 
  var mischyMap = new google.maps.Map(map, mapOptions);
 
  var marker = new google.maps.Marker({
    position: mischyLocation,
    map: mischyMap,
    animation: google.maps.Animation.BOUNCE,
    icon: 'mischka.png'
  });
 
// InfoWindow
	
}

google.maps.event.addDomListener(window, 'load', init);
