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

  var contentString = '<h1>Welcome to Mischkas House!</h1><p>Everything the light touches, is her kingdom.</p>'

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(mischyMap, marker);
  });	
	
// 
}

google.maps.event.addDomListener(window, 'load', init);
