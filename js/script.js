// Map variables

var map;
var mapCanvas;
var mischyLocation;
var mapOptions;
var mischyMap;
var marker;

// Map 

function initMap() {
  //alert('Welcome to Mischka's House!');
  var mapCanvas = document.getElementById('canvas');
  var mischyLocation = new google.maps.LatLng(41.88480472032102, -87.62735095043277);
  var mapOptions = { 
    center: mischyLocation,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    }
  };
  
  var mischyMap = new google.maps.Map(mapCanvas, mapOptions);
  
  var marker = new google.maps.Marker ({
    position: mischyLocation,
    map: mapCanvas,
    animation: google.maps.Animation.DROP,
    icon: ''
  });

google.maps.event.addEventListener(window, 'load', init);
  
  
<script src="https://maps.googleapis.com/maps/api/js?key=  AIzaSyB4XAi_W8ZdN0xQt6aYzyF1oxwgSVDZB-s&callback=initMap" defer></script>
