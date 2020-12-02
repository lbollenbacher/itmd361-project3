// Map 

function initMap() {
  var map = document.getElementById('canvas');
  var mischyLocation = new google.maps.LatLng(41.88480472032102, -87.62735095043277);
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
    animation: google.maps.Animation.DROP,
    icon: 'mischka.png'
  });
 
// InfoWindow
	
  var contentString = '<h1>Welcome to Mischka's House!</h1><p>This is where all of her favorite activities reside.</p>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
  };
	
}

google.maps.event.addEventListener(window, 'load', init);
