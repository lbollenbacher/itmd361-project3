// Map 

function initMap() {
  var map = document.getElementById('canvas');
  var mischyLocation = new google.maps.LatLng(41.88480472032102, -87.62735095043277);
  var mapOptions = {
    center: mischyLocation,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    }
  };

  
}

google.maps.event.addEventListener(window, 'load', init);
